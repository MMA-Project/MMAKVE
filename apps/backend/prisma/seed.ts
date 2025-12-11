import {
    PrismaClient,
    AdventurerType,
    Role,
    QuestStatus,
    AdventurerStatus,
    ItemType,
    ItemRarity,
} from "../src/generated/prisma-client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Début du seed...");

    // Nettoyage de la base de données
    console.log("🧹 Nettoyage de la base de données...");
    await prisma.itemOnQuestAssignment.deleteMany();
    await prisma.itemOnGuild.deleteMany();
    await prisma.questAssignment.deleteMany();
    await prisma.quest.deleteMany();
    await prisma.transaction.deleteMany();
    await prisma.bank.deleteMany();
    await prisma.user.deleteMany();
    await prisma.adventurer.deleteMany();
    await prisma.item.deleteMany();
    await prisma.guild.deleteMany();

    // Création de la guilde unique
    console.log("🏰 Création de la guilde...");

    const guild = await prisma.guild.create({
        data: {
            name: "Les Capuches d'Opale",
            bankId: "bank-main",
        },
    });

    // Création de la banque
    console.log("💰 Création de la banque...");

    const bank = await prisma.bank.create({
        data: {
            id: "bank-main",
            amount: 85000,
            guildId: guild.id,
        },
    });

    // Création de transactions
    console.log("📊 Création des transactions...");

    await prisma.transaction.createMany({
        data: [
            {
                amount: 15000,
                date: new Date("2025-09-15"),
                name: "Récompense quête du Dragon",
                bankId: bank.id,
            },
            {
                amount: 8000,
                date: new Date("2025-09-20"),
                name: "Vente d'équipement rare",
                bankId: bank.id,
            },
            {
                amount: -5000,
                date: new Date("2025-09-25"),
                name: "Achat de potions et fournitures",
                bankId: bank.id,
            },
            {
                amount: 12000,
                date: new Date("2025-10-01"),
                name: "Récompense escorte royale",
                bankId: bank.id,
            },
            {
                amount: -3000,
                date: new Date("2025-10-05"),
                name: "Réparation d'armures",
                bankId: bank.id,
            },
            {
                amount: 10000,
                date: new Date("2025-10-10"),
                name: "Contrat avec le royaume",
                bankId: bank.id,
            },
            {
                amount: -8000,
                date: new Date("2025-10-12"),
                name: "Achat d'armes légendaires",
                bankId: bank.id,
            },
            {
                amount: 6000,
                date: new Date("2025-10-18"),
                name: "Vente de matériaux rares",
                bankId: bank.id,
            },
            {
                amount: -2000,
                date: new Date("2025-10-20"),
                name: "Entretien du bâtiment",
                bankId: bank.id,
            },
            {
                amount: 7000,
                date: new Date("2025-10-25"),
                name: "Prime de performance",
                bankId: bank.id,
            },
        ],
    });

    // Création des aventuriers
    console.log("⚔️ Création des aventuriers...");

    const adventurers = await Promise.all([
        prisma.adventurer.create({
            data: {
                name: "Theron Flèchedargent",
                type: AdventurerType.ARCHER,
                status: AdventurerStatus.AVAILABLE,
                xp: 2500,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Grom Cassemur",
                type: AdventurerType.BARBARIAN,
                status: AdventurerStatus.AVAILABLE,
                xp: 3200,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Seraphine Lumière",
                type: AdventurerType.PRIEST,
                status: AdventurerStatus.ON_QUEST,
                xp: 2800,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Aldric Bouclier",
                type: AdventurerType.PALADIN,
                status: AdventurerStatus.AVAILABLE,
                xp: 3500,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Morgana Arcane",
                type: AdventurerType.ARCANE_MAGE,
                status: AdventurerStatus.AVAILABLE,
                xp: 4200,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Thalion Terrevive",
                type: AdventurerType.GEOMANCER,
                status: AdventurerStatus.AVAILABLE,
                xp: 3800,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Kaelith Mélixir",
                type: AdventurerType.ALCHEMIST,
                status: AdventurerStatus.INJURED,
                xp: 3000,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Durgan Forgefer",
                type: AdventurerType.BLACKSMITH,
                status: AdventurerStatus.AVAILABLE,
                xp: 3600,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Lyra Ombrelame",
                type: AdventurerType.ROGUE,
                status: AdventurerStatus.AVAILABLE,
                xp: 4500,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Vex Messager",
                type: AdventurerType.MESSENGER,
                status: AdventurerStatus.ON_QUEST,
                xp: 2200,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Mystral Enchant",
                type: AdventurerType.ENCHANTER,
                status: AdventurerStatus.SLEEPING,
                xp: 3900,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Brann Épéefer",
                type: AdventurerType.WARRIOR,
                status: AdventurerStatus.AVAILABLE,
                xp: 4100,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Elara Lumineuse",
                type: AdventurerType.PRIEST,
                status: AdventurerStatus.AVAILABLE,
                xp: 1500,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Ragnar Hache",
                type: AdventurerType.BARBARIAN,
                status: AdventurerStatus.DEAD,
                xp: 5200,
                guildId: guild.id,
            },
        }),
        prisma.adventurer.create({
            data: {
                name: "Silvia Furtive",
                type: AdventurerType.ROGUE,
                status: AdventurerStatus.INJURED,
                xp: 2900,
                guildId: guild.id,
            },
        }),
    ]);

    // Création des utilisateurs (avec hash des mots de passe)
    console.log("👥 Création des utilisateurs...");

    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = await Promise.all([
        // Clients
        prisma.user.create({
            data: {
                name: "client_jean",
                password: hashedPassword,
                role: Role.CLIENT,
            },
        }),
        prisma.user.create({
            data: {
                name: "client_marie",
                password: hashedPassword,
                role: Role.CLIENT,
            },
        }),
        prisma.user.create({
            data: {
                name: "client_pierre",
                password: hashedPassword,
                role: Role.CLIENT,
            },
        }),

        // Assistants
        prisma.user.create({
            data: {
                name: "assistant_alice",
                password: hashedPassword,
                role: Role.ASSISTANT,
            },
        }),
        prisma.user.create({
            data: {
                name: "assistant_bob",
                password: hashedPassword,
                role: Role.ASSISTANT,
            },
        }),

        // Aventuriers (liés à des aventuriers existants)
        prisma.user.create({
            data: {
                name: "aventurier_theron",
                password: hashedPassword,
                role: Role.AVENTURIER,
                adventurerId: adventurers[0].id,
            },
        }),
        prisma.user.create({
            data: {
                name: "aventurier_morgana",
                password: hashedPassword,
                role: Role.AVENTURIER,
                adventurerId: adventurers[4].id,
            },
        }),
        prisma.user.create({
            data: {
                name: "aventurier_lyra",
                password: hashedPassword,
                role: Role.AVENTURIER,
                adventurerId: adventurers[8].id,
            },
        }),
    ]);

    // Création des items
    console.log("🗡️ Création des items...");

    const items = await Promise.all([
        // Armes
        prisma.item.create({
            data: {
                name: "Épée de Flammes",
                description: "Une épée légendaire qui brûle de flammes éternelles",
                durability: 100,
                price: 5000,
                type: ItemType.WEAPON,
                stats: '{"attack": 85, "fire_damage": 25}',
                rarity: ItemRarity.LEGENDARY,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
            },
        }),
        prisma.item.create({
            data: {
                name: "Arc Sylvestre",
                description: "Un arc elfique taillé dans du bois ancien",
                durability: 80,
                price: 3500,
                type: ItemType.WEAPON,
                stats: '{"attack": 70, "precision": 30}',
                rarity: ItemRarity.EPIC,
                profiles: [AdventurerType.ARCHER],
            },
        }),
        prisma.item.create({
            data: {
                name: "Hache du Berserker",
                description: "Une hache massive qui augmente la rage du porteur",
                durability: 90,
                price: 4000,
                type: ItemType.WEAPON,
                stats: '{"attack": 95, "critical": 15}',
                rarity: ItemRarity.RARE,
                profiles: [AdventurerType.BARBARIAN],
            },
        }),
        prisma.item.create({
            data: {
                name: "Dague des Ombres",
                description: "Une dague furtive qui absorbe la lumière",
                durability: 70,
                price: 2800,
                type: ItemType.WEAPON,
                stats: '{"attack": 60, "stealth": 40}',
                rarity: ItemRarity.EPIC,
                profiles: [AdventurerType.ROGUE],
            },
        }),
        prisma.item.create({
            data: {
                name: "Bâton Arcanique",
                description: "Un bâton imprégné de magie ancienne",
                durability: 75,
                price: 4500,
                type: ItemType.WEAPON,
                stats: '{"magic_power": 80, "mana_regen": 10}',
                rarity: ItemRarity.LEGENDARY,
                profiles: [
                    AdventurerType.ARCANE_MAGE,
                    AdventurerType.GEOMANCER,
                    AdventurerType.ENCHANTER,
                ],
            },
        }),

        // Équipements
        prisma.item.create({
            data: {
                name: "Armure de Plates Dragon",
                description: "Une armure forgée à partir d'écailles de dragon",
                durability: 150,
                price: 6000,
                type: ItemType.EQUIPMENT,
                stats: '{"defense": 100, "fire_resistance": 30}',
                rarity: ItemRarity.LEGENDARY,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
            },
        }),
        prisma.item.create({
            data: {
                name: "Robe du Sage",
                description: "Une robe tissée de fils magiques",
                durability: 60,
                price: 3000,
                type: ItemType.EQUIPMENT,
                stats: '{"defense": 40, "magic_power": 20}',
                rarity: ItemRarity.RARE,
                profiles: [
                    AdventurerType.ARCANE_MAGE,
                    AdventurerType.PRIEST,
                    AdventurerType.ENCHANTER,
                ],
            },
        }),
        prisma.item.create({
            data: {
                name: "Armure de Cuir Renforcé",
                description: "Une armure légère mais résistante",
                durability: 80,
                price: 2000,
                type: ItemType.EQUIPMENT,
                stats: '{"defense": 60, "agility": 15}',
                rarity: ItemRarity.UNCOMMON,
                profiles: [AdventurerType.ARCHER, AdventurerType.ROGUE, AdventurerType.MESSENGER],
            },
        }),
        prisma.item.create({
            data: {
                name: "Casque du Champion",
                description: "Un casque qui augmente la résistance mentale",
                durability: 100,
                price: 2500,
                type: ItemType.EQUIPMENT,
                stats: '{"defense": 30, "mental_resistance": 25}',
                rarity: ItemRarity.EPIC,
                profiles: [
                    AdventurerType.WARRIOR,
                    AdventurerType.PALADIN,
                    AdventurerType.BARBARIAN,
                ],
            },
        }),
        prisma.item.create({
            data: {
                name: "Bottes de Rapidité",
                description: "Des bottes qui augmentent la vitesse de déplacement",
                durability: 50,
                price: 1500,
                type: ItemType.EQUIPMENT,
                stats: '{"speed": 30, "agility": 10}',
                rarity: ItemRarity.RARE,
                profiles: [AdventurerType.MESSENGER, AdventurerType.ROGUE, AdventurerType.ARCHER],
            },
        }),

        // Potions
        prisma.item.create({
            data: {
                name: "Potion de Soin Majeure",
                description: "Restaure une grande quantité de points de vie",
                durability: 1,
                price: 500,
                type: ItemType.POTION,
                stats: '{"heal": 150}',
                rarity: ItemRarity.RARE,
                profiles: [],
            },
        }),
        prisma.item.create({
            data: {
                name: "Potion de Mana",
                description: "Restaure les points de mana",
                durability: 1,
                price: 400,
                type: ItemType.POTION,
                stats: '{"mana_restore": 100}',
                rarity: ItemRarity.UNCOMMON,
                profiles: [],
            },
        }),
        prisma.item.create({
            data: {
                name: "Élixir de Force",
                description: "Augmente temporairement la force",
                durability: 1,
                price: 600,
                type: ItemType.POTION,
                stats: '{"strength_boost": 30, "duration": 300}',
                rarity: ItemRarity.RARE,
                profiles: [],
            },
        }),
        prisma.item.create({
            data: {
                name: "Potion d'Invisibilité",
                description: "Rend invisible pendant un court moment",
                durability: 1,
                price: 800,
                type: ItemType.POTION,
                stats: '{"invisibility": true, "duration": 60}',
                rarity: ItemRarity.EPIC,
                profiles: [],
            },
        }),

        // Divers
        prisma.item.create({
            data: {
                name: "Pierre de Téléportation",
                description: "Permet de se téléporter à la guilde",
                durability: 10,
                price: 1000,
                type: ItemType.MISC,
                stats: '{"teleport": true}',
                rarity: ItemRarity.RARE,
                profiles: [],
            },
        }),
        prisma.item.create({
            data: {
                name: "Cristal de Magie",
                description: "Un cristal concentrant de l'énergie magique",
                durability: 50,
                price: 2000,
                type: ItemType.MISC,
                stats: '{"magic_power": 15}',
                rarity: ItemRarity.EPIC,
                profiles: [
                    AdventurerType.ARCANE_MAGE,
                    AdventurerType.GEOMANCER,
                    AdventurerType.ENCHANTER,
                    AdventurerType.ALCHEMIST,
                ],
            },
        }),
        prisma.item.create({
            data: {
                name: "Parchemin de Protection",
                description: "Un parchemin magique de protection",
                durability: 3,
                price: 700,
                type: ItemType.MISC,
                stats: '{"defense_boost": 20, "duration": 600}',
                rarity: ItemRarity.UNCOMMON,
                profiles: [],
            },
        }),
        prisma.item.create({
            data: {
                name: "Sac à Dos Enchanté",
                description: "Un sac qui augmente la capacité de transport",
                durability: 200,
                price: 1500,
                type: ItemType.MISC,
                stats: '{"inventory_slots": 20}',
                rarity: ItemRarity.RARE,
                profiles: [],
            },
        }),
    ]);

    // Ajout de tous les items à l'inventaire de la guilde
    console.log("📦 Ajout d'items à la guilde...");

    await prisma.itemOnGuild.createMany({
        data: items.map((item) => ({
            guildId: guild.id,
            itemId: item.id,
        })),
    });

    // Création des quêtes
    console.log("📜 Création des quêtes...");

    const quests = await Promise.all([
        // Quêtes en attente
        prisma.quest.create({
            data: {
                title: "Éliminer le Dragon de la Montagne",
                description:
                    "Un dragon terrorise les villages au pied de la montagne. Il faut le vaincre.",
                deadline: new Date("2025-11-15"),
                xp_required: 4000,
                reward: 15000,
                status: QuestStatus.PENDING,
                createdBy: users[0].id,
                profils: [
                    AdventurerType.WARRIOR,
                    AdventurerType.PALADIN,
                    AdventurerType.ARCANE_MAGE,
                ],
            },
        }),
        prisma.quest.create({
            data: {
                title: "Livraison Urgente",
                description: "Livrer un colis important à la capitale avant la tombée de la nuit.",
                deadline: new Date("2025-10-30"),
                xp_required: 1000,
                reward: 2000,
                status: QuestStatus.PENDING,
                createdBy: users[1].id,
                profils: [AdventurerType.MESSENGER, AdventurerType.ROGUE],
            },
        }),

        // Quêtes approuvées
        prisma.quest.create({
            data: {
                title: "Récupération d'Artefact",
                description: "Récupérer un artefact ancien dans les ruines du temple maudit.",
                deadline: new Date("2025-11-10"),
                xp_required: 3000,
                reward: 10000,
                status: QuestStatus.APPROVED,
                createdBy: users[2].id,
                profils: [AdventurerType.ROGUE, AdventurerType.ARCANE_MAGE, AdventurerType.PRIEST],
            },
        }),

        // Quêtes en cours
        prisma.quest.create({
            data: {
                title: "Escorte de Marchands",
                description: "Escorter une caravane de marchands à travers la forêt dangereuse.",
                deadline: new Date("2025-11-05"),
                start_date: new Date("2025-10-25"),
                xp_required: 2000,
                reward: 5000,
                status: QuestStatus.IN_PROGRESS,
                createdBy: users[0].id,
                profils: [AdventurerType.WARRIOR, AdventurerType.ARCHER, AdventurerType.PRIEST],
            },
        }),
        prisma.quest.create({
            data: {
                title: "Enquête sur les Disparitions",
                description: "Enquêter sur les disparitions mystérieuses dans le village voisin.",
                deadline: new Date("2025-11-08"),
                start_date: new Date("2025-10-26"),
                xp_required: 2500,
                reward: 7000,
                status: QuestStatus.IN_PROGRESS,
                createdBy: users[1].id,
                profils: [AdventurerType.ROGUE, AdventurerType.MESSENGER],
            },
        }),

        // Quêtes complétées
        prisma.quest.create({
            data: {
                title: "Nettoyage de Cave",
                description: "Éliminer les monstres qui infestent la cave du fermier.",
                deadline: new Date("2025-10-20"),
                start_date: new Date("2025-10-15"),
                end_date: new Date("2025-10-18"),
                xp_required: 1500,
                reward: 3000,
                status: QuestStatus.COMPLETED,
                createdBy: users[2].id,
                profils: [AdventurerType.WARRIOR, AdventurerType.BARBARIAN],
            },
        }),
        prisma.quest.create({
            data: {
                title: "Collecte de Plantes Rares",
                description: "Collecter des plantes médicinales rares dans la forêt enchantée.",
                deadline: new Date("2025-10-22"),
                start_date: new Date("2025-10-18"),
                end_date: new Date("2025-10-21"),
                xp_required: 1800,
                reward: 4000,
                status: QuestStatus.COMPLETED,
                createdBy: users[0].id,
                profils: [AdventurerType.ALCHEMIST, AdventurerType.GEOMANCER],
            },
        }),

        // Quête échouée
        prisma.quest.create({
            data: {
                title: "Défense du Fort",
                description: "Défendre le fort contre une horde d'orcs.",
                deadline: new Date("2025-10-15"),
                start_date: new Date("2025-10-10"),
                end_date: new Date("2025-10-14"),
                xp_required: 3500,
                reward: 12000,
                status: QuestStatus.FAILED,
                createdBy: users[1].id,
                profils: [
                    AdventurerType.WARRIOR,
                    AdventurerType.PALADIN,
                    AdventurerType.BARBARIAN,
                    AdventurerType.ARCHER,
                ],
            },
        }),

        // Plus de quêtes variées
        prisma.quest.create({
            data: {
                title: "Forger une Épée Légendaire",
                description:
                    "Aider le forgeron à créer une épée légendaire en récupérant les matériaux nécessaires.",
                deadline: new Date("2025-11-20"),
                xp_required: 2800,
                reward: 8000,
                status: QuestStatus.APPROVED,
                createdBy: users[2].id,
                profils: [AdventurerType.BLACKSMITH, AdventurerType.WARRIOR],
            },
        }),
        prisma.quest.create({
            data: {
                title: "Pacte avec les Esprits",
                description: "Négocier avec les esprits de la forêt pour apaiser leur colère.",
                deadline: new Date("2025-11-12"),
                xp_required: 3200,
                reward: 9000,
                status: QuestStatus.PENDING,
                createdBy: users[0].id,
                profils: [AdventurerType.GEOMANCER, AdventurerType.PRIEST],
            },
        }),
    ]);

    // Création des assignations de quêtes
    console.log("🎯 Création des assignations...");

    const assignments = await Promise.all([
        // Quête en cours 1 (Escorte de Marchands)
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[0].id, // Theron (Archer)
                questId: quests[3].id,
            },
        }),
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[2].id, // Seraphine (Priest)
                questId: quests[3].id,
            },
        }),

        // Quête en cours 2 (Enquête)
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[8].id, // Lyra (Rogue)
                questId: quests[4].id,
            },
        }),
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[9].id, // Vex (Messenger)
                questId: quests[4].id,
            },
        }),

        // Quête complétée 1
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[1].id, // Grom (Barbarian)
                questId: quests[5].id,
            },
        }),

        // Quête complétée 2
        prisma.questAssignment.create({
            data: {
                adventurerId: adventurers[6].id, // Kaelith (Alchemist)
                questId: quests[6].id,
            },
        }),
    ]);

    // Ajout d'items aux assignations
    console.log("⚔️ Ajout d'items aux assignations...");

    await prisma.itemOnQuestAssignment.createMany({
        data: [
            // Assignment 1 (Theron - Escorte)
            { questAssignmentId: assignments[0].id, itemId: items[1].id }, // Arc Sylvestre
            { questAssignmentId: assignments[0].id, itemId: items[7].id }, // Armure de Cuir
            { questAssignmentId: assignments[0].id, itemId: items[10].id }, // Potion de Soin

            // Assignment 2 (Seraphine - Escorte)
            { questAssignmentId: assignments[1].id, itemId: items[6].id }, // Robe du Sage
            { questAssignmentId: assignments[1].id, itemId: items[11].id }, // Potion de Mana

            // Assignment 3 (Lyra - Enquête)
            { questAssignmentId: assignments[2].id, itemId: items[3].id }, // Dague des Ombres
            { questAssignmentId: assignments[2].id, itemId: items[13].id }, // Potion d'Invisibilité

            // Assignment 4 (Vex - Enquête)
            { questAssignmentId: assignments[3].id, itemId: items[9].id }, // Bottes de Rapidité
            { questAssignmentId: assignments[3].id, itemId: items[14].id }, // Pierre de Téléportation

            // Assignment 5 (Grom - Nettoyage)
            { questAssignmentId: assignments[4].id, itemId: items[2].id }, // Hache du Berserker
            { questAssignmentId: assignments[4].id, itemId: items[8].id }, // Casque du Champion

            // Assignment 6 (Kaelith - Collecte)
            { questAssignmentId: assignments[5].id, itemId: items[15].id }, // Cristal de Magie
            { questAssignmentId: assignments[5].id, itemId: items[17].id }, // Sac à Dos Enchanté
        ],
    });

    console.log("✅ Seed terminé avec succès!");
    console.log(`
📊 Résumé:
- Guilde créée Les Capuches d'Opale
- Banque créée avec 85 000 pièces d'or
- 10 Transactions créées
- ${adventurers.length} Aventuriers créés (tous dans la même guilde)
- ${users.length} Utilisateurs créés
- ${items.length} Items créés (tous dans l'inventaire de la guilde)
- ${quests.length} Quêtes créées
- ${assignments.length} Assignations créées

🔐 Identifiants de test:
- Clients: client_jean, client_marie, client_pierre
- Assistants: assistant_alice, assistant_bob
- Aventuriers: aventurier_theron, aventurier_morgana, aventurier_lyra
- Mot de passe: password123

💡 Tous les aventuriers et items appartiennent à la même guilde!
  `);
}

main()
    .catch((e) => {
        console.error("❌ Erreur lors du seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
