    // Global variables
    let selectedProfile = null;
    let currentScenario = 0;
    let totalWaterUsage = 0;
    let totalEnergyUsage = 0;
    let waterSaved = 0;
    let energySaved = 0;
    let moneySaved = 0;
    let efficiencyScore = 0;
    let userChoices = [];

    // Profiles base consumption
    const profileBaseConsumption = {
        sozinho: { water: 120, energy: 8 },
        familia: { water: 380, energy: 22 },
        estudante: { water: 90, energy: 5 }
    };

    // Scenarios data
    const scenarios = [
        {
            title: "Manhã: Hora do banho",
            description: "Você está começando seu dia. Quanto tempo vai durar seu banho?",
            choices: [
                {
                    text: "Banho rápido (5 minutos)",
                    water: 45,
                    energy: 0.8,
                    waterSaved: 90,
                    energySaved: 1.6,
                    efficiency: 10
                },
                {
                    text: "Banho médio (10 minutos)",
                    water: 90,
                    energy: 1.6,
                    waterSaved: 45,
                    energySaved: 0.8,
                    efficiency: 5
                },
                {
                    text: "Banho longo (20 minutos)",
                    water: 180,
                    energy: 3.2,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Manhã: Escovando os dentes",
            description: "Como você escova os dentes?",
            choices: [
                {
                    text: "Torneira fechada durante a escovação",
                    water: 2,
                    energy: 0,
                    waterSaved: 10,
                    energySaved: 0,
                    efficiency: 10
                },
                {
                    text: "Torneira aberta apenas para enxágue",
                    water: 5,
                    energy: 0,
                    waterSaved: 7,
                    energySaved: 0,
                    efficiency: 7
                },
                {
                    text: "Torneira aberta o tempo todo",
                    water: 12,
                    energy: 0,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Temperatura em casa",
            description: "Como você controla a temperatura do ambiente?",
            choices: [
                {
                    text: "Uso ventilação natural (janelas)",
                    water: 0,
                    energy: 0,
                    waterSaved: 0,
                    energySaved: 3.5,
                    efficiency: 10
                },
                {
                    text: "Uso ventilador quando necessário",
                    water: 0,
                    energy: 0.5,
                    waterSaved: 0,
                    energySaved: 3,
                    efficiency: 8
                },
                {
                    text: "Ar-condicionado por várias horas",
                    water: 0,
                    energy: 3.5,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Lavando roupas",
            description: "Como você lava suas roupas?",
            choices: [
                {
                    text: "Máquina apenas quando está cheia",
                    water: 120,
                    energy: 1.2,
                    waterSaved: 120,
                    energySaved: 1.2,
                    efficiency: 10
                },
                {
                    text: "Máquina com meia carga",
                    water: 180,
                    energy: 1.8,
                    waterSaved: 60,
                    energySaved: 0.6,
                    efficiency: 5
                },
                {
                    text: "Várias lavagens com poucas peças",
                    water: 240,
                    energy: 2.4,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Iluminação da casa",
            description: "Como você gerencia a iluminação?",
            choices: [
                {
                    text: "Uso luz natural e LEDs eficientes",
                    water: 0,
                    energy: 0.5,
                    waterSaved: 0,
                    energySaved: 1.5,
                    efficiency: 10
                },
                {
                    text: "Uso lâmpadas LED mas esqueço ligadas",
                    water: 0,
                    energy: 1,
                    waterSaved: 0,
                    energySaved: 1,
                    efficiency: 5
                },
                {
                    text: "Uso lâmpadas comuns e deixo ligadas",
                    water: 0,
                    energy: 2,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Lavando louça",
            description: "Como você lava a louça?",
            choices: [
                {
                    text: "Ensaboar com torneira fechada",
                    water: 20,
                    energy: 0.1,
                    waterSaved: 80,
                    energySaved: 0.4,
                    efficiency: 10
                },
                {
                    text: "Torneira aberta só para enxágue",
                    water: 50,
                    energy: 0.25,
                    waterSaved: 50,
                    energySaved: 0.25,
                    efficiency: 6
                },
                {
                    text: "Torneira aberta o tempo todo",
                    water: 100,
                    energy: 0.5,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Uso de eletrônicos",
            description: "Como você usa seus aparelhos eletrônicos?",
            choices: [
                {
                    text: "Desligo completamente quando não uso",
                    water: 0,
                    energy: 0.2,
                    waterSaved: 0,
                    energySaved: 0.8,
                    efficiency: 10
                },
                {
                    text: "Deixo em modo de espera (standby)",
                    water: 0,
                    energy: 0.5,
                    waterSaved: 0,
                    energySaved: 0.5,
                    efficiency: 5
                },
                {
                    text: "Deixo tudo ligado o tempo todo",
                    water: 0,
                    energy: 1,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        },
        {
            title: "Noite: Antes de dormir",
            description: "O que você faz antes de dormir?",
            choices: [
                {
                    text: "Verifico se torneiras estão fechadas e desligo aparelhos",
                    water: 0,
                    energy: 0,
                    waterSaved: 5,
                    energySaved: 0.5,
                    efficiency: 10
                },
                {
                    text: "Às vezes verifico se algo ficou ligado",
                    water: 2,
                    energy: 0.2,
                    waterSaved: 3,
                    energySaved: 0.3,
                    efficiency: 5
                },
                {
                    text: "Vou dormir sem verificar nada",
                    water: 5,
                    energy: 0.5,
                    waterSaved: 0,
                    energySaved: 0,
                    efficiency: 0
                }
            ]
        }
    ];

    // Tips based on choices
    const tips = {
        banho: [
            "Reduzir o tempo de banho de 15 para 5 minutos economiza até 90 litros de água por dia.",
            "Instalar um redutor de vazão no chuveiro pode diminuir o consumo em até 60%.",
            "Fechar o registro ao se ensaboar economiza até 80 litros por banho."
        ],
        dentes: [
            "Usar um copo para escovar os dentes economiza até 11,5 litros de água por escovação.",
            "Uma torneira aberta gasta cerca de 12 litros por minuto."
        ],
        temperatura: [
            "Manter janelas e cortinas fechadas durante o dia quente reduz a necessidade de refrigeração.",
            "Cada grau a menos no ar-condicionado economiza cerca de 10% de energia.",
            "Ventiladores consomem até 90% menos energia que ar-condicionados."
        ],
        roupas: [
            "Lavar roupas apenas com carga completa economiza até 120 litros por lavagem.",
            "Secar roupas naturalmente ao invés de usar secadora economiza até 5 kWh por ciclo."
        ],
        iluminacao: [
            "Lâmpadas LED consomem até 80% menos energia que as incandescentes.",
            "Aproveitar a luz natural pode reduzir o consumo de energia em até 30%."
        ],
        louca: [
            "Lavar louça com a torneira fechada economiza até 80 litros de água.",
            "Usar a máquina de lavar louça apenas quando cheia economiza água e energia."
        ],
        eletronicos: [
            "Aparelhos em modo standby podem representar até 15% da conta de energia.",
            "Desligar completamente os aparelhos quando não estão em uso pode economizar até R$ 20 por mês."
        ],
        dormir: [
            "Verificar torneiras antes de dormir evita vazamentos que podem desperdiçar até 96 litros por dia.",
            "Desligar todos os aparelhos antes de dormir pode economizar até 8% na conta de energia."
        ]
    };

    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
        // Set up profile selection
        document.querySelectorAll('.choice-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.choice-card').forEach(c => {
                    c.classList.remove('border-green-500', 'shadow-md');
                    c.classList.add('border-gray-200');
                });
                this.classList.remove('border-gray-200');
                this.classList.add('border-green-500', 'shadow-md');
                document.getElementById('start-btn').disabled = false;
            });
        });

        // Set up start button
        document.getElementById('start-btn').addEventListener('click', startSimulation);
    });

    function selectProfile(profile) {
        selectedProfile = profile;
        document.getElementById('start-btn').disabled = false;
    }

    function startSimulation() {
        if (!selectedProfile) return;
        
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('simulation-screen').classList.remove('hidden');
        
        // Reset values
        currentScenario = 0;
        totalWaterUsage = 0;
        totalEnergyUsage = 0;
        waterSaved = 0;
        energySaved = 0;
        moneySaved = 0;
        efficiencyScore = 0;
        userChoices = [];
        
        // Load first scenario
        loadScenario(currentScenario);
    }

    function loadScenario(index) {
        if (index >= scenarios.length) {
            showResults();
            return;
        }

        const scenario = scenarios[index];
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').textContent = scenario.description;
        document.getElementById('scenario-counter').textContent = `${index + 1}/${scenarios.length}`;
        
        // Update progress bar
        const progressPercentage = ((index + 1) / scenarios.length) * 100;
        document.querySelector('.progress-bar').style.width = `${progressPercentage}%`;
        
        // Clear and populate choices
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';
        
        scenario.choices.forEach((choice, choiceIndex) => {
            const choiceCard = document.createElement('div');
            choiceCard.className = 'choice-card bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-green-500 hover:shadow-md';
            choiceCard.onclick = () => selectChoice(choiceIndex);
            
            // Create icon based on efficiency
            let iconColor, iconBg;
            if (choice.efficiency >= 8) {
                iconColor = 'text-green-600';
                iconBg = 'bg-green-100';
            } else if (choice.efficiency >= 4) {
                iconColor = 'text-yellow-600';
                iconBg = 'bg-yellow-100';
            } else {
                iconColor = 'text-red-600';
                iconBg = 'bg-red-100';
            }
            
            choiceCard.innerHTML = `
                <div class="flex items-start mb-2">
                    <div class="eco-icon ${iconBg} p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${iconColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            ${choice.efficiency >= 8 ? 
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' : 
                                (choice.efficiency >= 4 ? 
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />' : 
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />')}
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium">${choice.text}</h4>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        ${choice.water} litros
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        ${choice.energy} kWh
                    </div>
                </div>
            `;
            
            choicesContainer.appendChild(choiceCard);
        });
    }

    function selectChoice(choiceIndex) {
        const scenario = scenarios[currentScenario];
        const choice = scenario.choices[choiceIndex];
        
        // Record user choice
        userChoices.push({
            scenario: currentScenario,
            choice: choiceIndex
        });
        
        // Update totals
        totalWaterUsage += choice.water;
        totalEnergyUsage += choice.energy;
        waterSaved += choice.waterSaved;
        energySaved += choice.energySaved;
        efficiencyScore += choice.efficiency;
        
        // Move to next scenario
        currentScenario++;
        loadScenario(currentScenario);
    }

    function showResults() {
        document.getElementById('simulation-screen').classList.add('hidden');
        document.getElementById('results-screen').classList.remove('hidden');
        
        // Calculate base consumption based on profile
        const baseConsumption = profileBaseConsumption[selectedProfile];
        
        // Add base consumption to totals
        totalWaterUsage += baseConsumption.water;
        totalEnergyUsage += baseConsumption.energy;
        
        // Calculate money saved (approximate values)
        const waterCostPerLiter = 0.01; // R$ 0,01 per liter
        const energyCostPerKwh = 0.80; // R$ 0,80 per kWh
        moneySaved = (waterSaved * waterCostPerLiter) + (energySaved * energyCostPerKwh);
        
        // Calculate efficiency percentage
        const maxEfficiency = scenarios.length * 10;
        const efficiencyPercentage = (efficiencyScore / maxEfficiency) * 100;
        
        // Update UI
        document.getElementById('water-total').textContent = `${totalWaterUsage} litros`;
        document.getElementById('water-saved').textContent = `${waterSaved} litros`;
        document.getElementById('energy-total').textContent = `${totalEnergyUsage.toFixed(1)} kWh`;
        document.getElementById('energy-saved').textContent = `${energySaved.toFixed(1)} kWh`;
        document.getElementById('money-saved').textContent = `R$ ${moneySaved.toFixed(2)}`;
        document.getElementById('efficiency-bar').style.width = `${efficiencyPercentage}%`;
        document.getElementById('efficiency-rating').textContent = `Nota Verde: ${Math.round(efficiencyScore / scenarios.length)}/10`;
        
        // Set result icon
        const resultIconContainer = document.getElementById('result-icon-container');
        if (efficiencyPercentage >= 70) {
            resultIconContainer.className = 'bg-green-100 p-3 rounded-full';
            resultIconContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `;
        } else if (efficiencyPercentage >= 40) {
            resultIconContainer.className = 'bg-yellow-100 p-3 rounded-full';
            resultIconContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            `;
        } else {
            resultIconContainer.className = 'bg-red-100 p-3 rounded-full';
            resultIconContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `;
        }
        
        // Generate personalized tips
        generateTips();
    }

    function generateTips() {
        const tipsList = document.getElementById('tips-list');
        tipsList.innerHTML = '';
        
        // Get tips based on user choices
        const tipCategories = ['banho', 'dentes', 'temperatura', 'roupas', 'iluminacao', 'louca', 'eletronicos', 'dormir'];
        const selectedTips = [];
        
        // Select tips based on user's worst choices
        userChoices.forEach((userChoice, index) => {
            if (userChoice.choice > 0) { // Not the best choice
                const category = tipCategories[index % tipCategories.length];
                const categoryTips = tips[category];
                if (categoryTips && categoryTips.length > 0) {
                    const randomTip = categoryTips[Math.floor(Math.random() * categoryTips.length)];
                    if (!selectedTips.includes(randomTip)) {
                        selectedTips.push(randomTip);
                    }
                }
            }
        });
        
        // If we don't have enough tips, add some general ones
        while (selectedTips.length < 3) {
            const randomCategory = tipCategories[Math.floor(Math.random() * tipCategories.length)];
            const categoryTips = tips[randomCategory];
            if (categoryTips && categoryTips.length > 0) {
                const randomTip = categoryTips[Math.floor(Math.random() * categoryTips.length)];
                if (!selectedTips.includes(randomTip)) {
                    selectedTips.push(randomTip);
                }
            }
        }
        
        // Display tips (limit to 3)
        selectedTips.slice(0, 3).forEach(tip => {
            const tipItem = document.createElement('li');
            tipItem.className = 'flex items-start';
            tipItem.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${tip}</span>
            `;
            tipsList.appendChild(tipItem);
        });
    }

    function resetSimulation() {
        document.getElementById('results-screen').classList.add('hidden');
        document.getElementById('welcome-screen').classList.remove('hidden');
        
        // Reset selection
        document.querySelectorAll('.choice-card').forEach(card => {
            card.classList.remove('border-green-500', 'shadow-md');
            card.classList.add('border-gray-200');
        });
        
        document.getElementById('start-btn').disabled = true;
        selectedProfile = null;
    }

    function shareResults() {
        // Calculate efficiency percentage for sharing
        const maxEfficiency = scenarios.length * 10;
        const efficiencyPercentage = (efficiencyScore / maxEfficiency) * 100;
        
        // Create share text
        const shareText = `🌱 Minha Rotina Inteligente 🌱\n\nEconomizei ${waterSaved} litros de água e ${energySaved.toFixed(1)} kWh de energia!\nNota Verde: ${Math.round(efficiencyScore / scenarios.length)}/10\n\nFaça o teste você também!`;
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Rotina Inteligente',
                text: shareText
            }).catch(error => {
                alert('Compartilhe sua pontuação:\n\n' + shareText);
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Compartilhe sua pontuação:\n\n' + shareText);
        }
    }