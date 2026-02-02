import {
    PrismaClient,
    AdventurerType,
    Role,
    QuestStatus,
    AdventurerStatus,
    ItemType,
    ItemRarity,
    ItemName,
    ItemStatus,
} from "../src/generated/prisma-client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Début du seed (basé sur les mocks frontend)...");

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

    const hashedPassword = await bcrypt.hash("password123", 10);

    // === GUILDE UNIQUE ===
    console.log("🏰 Création de la guilde...");

    const guild = await prisma.guild.create({
        data: {
            name: "Guilde des Aventuriers",
            bankId: "bank-main",
        },
    });

    // === BANQUE ===
    console.log("💰 Création de la banque...");

    await prisma.bank.create({
        data: {
            id: "bank-main",
            amount: 75000,
            guildId: guild.id,
        },
    });

    // === UTILISATEURS & AVENTURIERS ===
    console.log("👥 Création des utilisateurs et aventuriers...");

    // Guilde 1: Guilde du Poing de Fer
    const user501 = await prisma.user.create({
        data: {
            id: "501",
            name: "Borin Ironfist",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-01-02T10:00:00Z"),
        },
    });

    const adventurer501 = await prisma.adventurer.create({
        data: {
            id: "501",
            type: AdventurerType.ENCHANTER,
            status: AdventurerStatus.AVAILABLE,
            xp: 1800,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user501.id },
        data: { adventurerId: adventurer501.id },
    });

    const user502 = await prisma.user.create({
        data: {
            id: "502",
            name: "Kaela Stormshield",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-01-12T09:15:00Z"),
        },
    });

    const adventurer502 = await prisma.adventurer.create({
        data: {
            id: "502",
            type: AdventurerType.PRIEST,
            status: AdventurerStatus.AVAILABLE,
            xp: 2400,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user502.id },
        data: { adventurerId: adventurer502.id },
    });

    // Guilde 2: Ordre de Lune d'Argent
    const user503 = await prisma.user.create({
        data: {
            id: "503",
            name: "Gorak Stonefist",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-01-15T14:45:00Z"),
        },
    });

    const adventurer503 = await prisma.adventurer.create({
        data: {
            id: "503",
            type: AdventurerType.BARBARIAN,
            status: AdventurerStatus.AVAILABLE,
            xp: 2800,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user503.id },
        data: { adventurerId: adventurer503.id },
    });

    const user504 = await prisma.user.create({
        data: {
            id: "504",
            name: "Thalion the Swift",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-01-12T11:15:00Z"),
        },
    });

    const adventurer504 = await prisma.adventurer.create({
        data: {
            id: "504",
            type: AdventurerType.ENCHANTER,
            status: AdventurerStatus.AVAILABLE,
            xp: 1000,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user504.id },
        data: { adventurerId: adventurer504.id },
    });

    const user505 = await prisma.user.create({
        data: {
            id: "505",
            name: "Ryn Featherstep",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-02-10T10:00:00Z"),
        },
    });

    const adventurer505 = await prisma.adventurer.create({
        data: {
            id: "505",
            type: AdventurerType.ARCHER,
            status: AdventurerStatus.AVAILABLE,
            xp: 1600,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user505.id },
        data: { adventurerId: adventurer505.id },
    });

    // Guilde 3: Les Chercheurs
    const user506 = await prisma.user.create({
        data: {
            id: "506",
            name: "Elandra Whisperwind",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-01-10T10:30:00Z"),
        },
    });

    const adventurer506 = await prisma.adventurer.create({
        data: {
            id: "506",
            type: AdventurerType.ENCHANTER,
            status: AdventurerStatus.AVAILABLE,
            xp: 1050,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user506.id },
        data: { adventurerId: adventurer506.id },
    });

    const user507 = await prisma.user.create({
        data: {
            id: "507",
            name: "Liora Dawnspark",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-02-20T08:45:00Z"),
        },
    });

    const adventurer507 = await prisma.adventurer.create({
        data: {
            id: "507",
            type: AdventurerType.ARCANE_MAGE,
            status: AdventurerStatus.AVAILABLE,
            xp: 2200,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user507.id },
        data: { adventurerId: adventurer507.id },
    });

    // Autres aventuriers
    const user508 = await prisma.user.create({
        data: {
            id: "508",
            name: "Mira Lightveil",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-03-10T09:00:00Z"),
        },
    });

    const adventurer508 = await prisma.adventurer.create({
        data: {
            id: "508",
            type: AdventurerType.PRIEST,
            status: AdventurerStatus.AVAILABLE,
            xp: 1300,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user508.id },
        data: { adventurerId: adventurer508.id },
    });

    const user509 = await prisma.user.create({
        data: {
            id: "509",
            name: "Seren Willowglade",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-03-12T11:00:00Z"),
        },
    });

    const adventurer509 = await prisma.adventurer.create({
        data: {
            id: "509",
            type: AdventurerType.PRIEST,
            status: AdventurerStatus.RESTING,
            xp: 1500,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user509.id },
        data: { adventurerId: adventurer509.id },
    });

    const user510 = await prisma.user.create({
        data: {
            id: "510",
            name: "Tarin Emberforge",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-03-14T15:00:00Z"),
        },
    });

    const adventurer510 = await prisma.adventurer.create({
        data: {
            id: "510",
            type: AdventurerType.ENCHANTER,
            status: AdventurerStatus.AVAILABLE,
            xp: 900,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user510.id },
        data: { adventurerId: adventurer510.id },
    });

    const user511 = await prisma.user.create({
        data: {
            id: "511",
            name: "Selene Frostweaver",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-03-18T13:00:00Z"),
        },
    });

    const adventurer511 = await prisma.adventurer.create({
        data: {
            id: "511",
            type: AdventurerType.GEOMANCER,
            status: AdventurerStatus.AVAILABLE,
            xp: 2500,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user511.id },
        data: { adventurerId: adventurer511.id },
    });

    const user512 = await prisma.user.create({
        data: {
            id: "512",
            name: "Doran Quickblade",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-02-02T09:00:00Z"),
        },
    });

    const adventurer512 = await prisma.adventurer.create({
        data: {
            id: "512",
            type: AdventurerType.ROGUE,
            status: AdventurerStatus.ON_QUEST,
            xp: 1900,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user512.id },
        data: { adventurerId: adventurer512.id },
    });

    const user513 = await prisma.user.create({
        data: {
            id: "513",
            name: "Kara Windrunner",
            password: hashedPassword,
            role: Role.ADVENTURER,
            createdAt: new Date("2024-03-03T12:00:00Z"),
        },
    });

    const adventurer513 = await prisma.adventurer.create({
        data: {
            id: "513",
            type: AdventurerType.ENCHANTER,
            status: AdventurerStatus.RESTING,
            xp: 2300,
            guildId: guild.id,
        },
    });

    await prisma.user.update({
        where: { id: user513.id },
        data: { adventurerId: adventurer513.id },
    });

    // === CLIENT POUR LES QUÊTES ===
    const clientUser = await prisma.user.create({
        data: {
            id: "1004",
            name: "Lyria Moonshadow",
            password: hashedPassword,
            role: Role.CLIENT,
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
    });

    // === QUÊTES ===
    console.log("📜 Création des quêtes...");

    const quest1 = await prisma.quest.create({
        data: {
            id: "1",
            title: "Récupérer le joyau azur",
            description:
                "Une gemme précieuse a été volée par une bande de pillards des rivières. Récupérez-la et ramenez-la en sécurité.",
            deadline: new Date("2025-10-15T23:59:59Z"),
            start_date: new Date("2025-10-01T10:00:00Z"),
            end_date: new Date("2025-10-15T23:59:59Z"),
            xp_required: 1200,
            reward: 150,
            status: QuestStatus.PENDING,
            createdBy: clientUser.id,
            profils: [AdventurerType.ENCHANTER, AdventurerType.PRIEST],
        },
    });

    const quest2 = await prisma.quest.create({
        data: {
            id: "2",
            title: "Nettoyer les Mines Oubliées",
            description:
                "Les anciens tunnels de la mine ont été infestés par des élémentaires de terre. Nettoyez-les pour que les mineurs puissent revenir.",
            deadline: new Date("2025-10-30T23:59:59Z"),
            start_date: new Date("2025-10-25T09:00:00Z"),
            end_date: new Date("2025-10-30T17:00:00Z"),
            xp_required: 2400,
            reward: 300,
            status: QuestStatus.IN_PROGRESS,
            createdBy: clientUser.id,
            profils: [AdventurerType.BARBARIAN, AdventurerType.PALADIN],
        },
    });

    const quest3 = await prisma.quest.create({
        data: {
            id: "3",
            title: "Escorter la caravane marchande",
            description:
                "Une caravane a besoin de protection à travers des cols infestés de bandits. Assurez-vous que tous les chariots atteignent la prochaine ville.",
            deadline: new Date("2025-12-01T23:59:59Z"),
            start_date: new Date("2025-11-28T08:00:00Z"),
            end_date: new Date("2025-12-12T20:00:00Z"),
            xp_required: 1800,
            reward: 220,
            status: QuestStatus.APPROVED,
            createdBy: clientUser.id,
            profils: [AdventurerType.ROGUE, AdventurerType.WARRIOR, AdventurerType.PRIEST],
        },
    });

    const quest4 = await prisma.quest.create({
        data: {
            id: "4",
            title: "Chasse au Basilic",
            description:
                "Un basilic terrorise les voyageurs sur la route du nord. Éliminez-le avant qu'il ne fasse plus de victimes.",
            deadline: new Date("2025-11-20T23:59:59Z"),
            start_date: new Date("2025-11-10T08:00:00Z"),
            end_date: new Date("2025-11-18T18:00:00Z"),
            xp_required: 2200,
            reward: 400,
            status: QuestStatus.COMPLETED,
            createdBy: clientUser.id,
            profils: [AdventurerType.ARCHER, AdventurerType.WARRIOR, AdventurerType.ALCHEMIST],
        },
    });

    const quest5 = await prisma.quest.create({
        data: {
            id: "5",
            title: "Livraison de parchemins secrets",
            description:
                "Transportez discrètement des parchemins importants jusqu'à la citadelle sans vous faire repérer.",
            deadline: new Date("2026-01-05T23:59:59Z"),
            xp_required: 800,
            reward: 180,
            status: QuestStatus.PENDING,
            createdBy: clientUser.id,
            profils: [AdventurerType.MESSENGER, AdventurerType.ROGUE],
        },
    });

    const quest6 = await prisma.quest.create({
        data: {
            id: "6",
            title: "Exploration des Catacombes",
            description:
                "Explorez les anciennes catacombes sous la ville et cartographiez les passages secrets.",
            deadline: new Date("2026-02-15T23:59:59Z"),
            start_date: new Date("2026-02-01T10:00:00Z"),
            xp_required: 1500,
            reward: 350,
            status: QuestStatus.IN_PROGRESS,
            createdBy: clientUser.id,
            profils: [AdventurerType.ROGUE, AdventurerType.ARCANE_MAGE, AdventurerType.ENCHANTER],
        },
    });

    const quest7 = await prisma.quest.create({
        data: {
            id: "7",
            title: "Défendre le village contre les gobelins",
            description:
                "Une horde de gobelins menace un village isolé. Protégez les habitants et repoussez l'invasion.",
            deadline: new Date("2025-12-20T23:59:59Z"),
            xp_required: 2000,
            reward: 500,
            status: QuestStatus.APPROVED,
            createdBy: clientUser.id,
            profils: [AdventurerType.WARRIOR, AdventurerType.PALADIN, AdventurerType.ARCHER],
        },
    });

    const quest8 = await prisma.quest.create({
        data: {
            id: "8",
            title: "Collecter des herbes rares",
            description:
                "Récoltez des plantes médicinales rares dans les marais maudits pour préparer des potions de guérison.",
            deadline: new Date("2025-11-30T23:59:59Z"),
            start_date: new Date("2025-11-05T08:00:00Z"),
            end_date: new Date("2025-11-25T17:00:00Z"),
            xp_required: 1000,
            reward: 250,
            status: QuestStatus.COMPLETED,
            createdBy: clientUser.id,
            profils: [AdventurerType.ALCHEMIST, AdventurerType.GEOMANCER],
        },
    });

    const quest9 = await prisma.quest.create({
        data: {
            id: "9",
            title: "Enquête sur la secte interdite",
            description:
                "Infiltrez une secte mystérieuse et découvrez leurs plans. Discrétion absolue requise.",
            deadline: new Date("2026-03-01T23:59:59Z"),
            xp_required: 3000,
            reward: 600,
            status: QuestStatus.PENDING,
            createdBy: clientUser.id,
            profils: [AdventurerType.ROGUE, AdventurerType.ENCHANTER],
        },
    });

    const quest10 = await prisma.quest.create({
        data: {
            id: "10",
            title: "Forger l'armure du champion",
            description:
                "Rassemblez les matériaux nécessaires et forgez une armure légendaire pour le champion du royaume.",
            deadline: new Date("2026-01-25T23:59:59Z"),
            start_date: new Date("2026-01-10T09:00:00Z"),
            xp_required: 2800,
            reward: 750,
            status: QuestStatus.IN_PROGRESS,
            createdBy: clientUser.id,
            profils: [AdventurerType.BLACKSMITH, AdventurerType.GEOMANCER],
        },
    });

    const quest11 = await prisma.quest.create({
        data: {
            id: "11",
            title: "Bannir l'esprit maléfique",
            description:
                "Un esprit maléfique hante le manoir abandonné. Utilisez vos pouvoirs pour le bannir définitivement.",
            deadline: new Date("2025-12-10T23:59:59Z"),
            xp_required: 2600,
            reward: 550,
            status: QuestStatus.APPROVED,
            createdBy: clientUser.id,
            profils: [AdventurerType.PRIEST, AdventurerType.ARCANE_MAGE, AdventurerType.ENCHANTER],
        },
    });

    const quest12 = await prisma.quest.create({
        data: {
            id: "12",
            title: "Récupération de reliques anciennes",
            description:
                "Des reliques sacrées ont été volées du temple. Retrouvez-les et rapportez-les avant qu'elles ne soient vendues.",
            deadline: new Date("2026-02-28T23:59:59Z"),
            start_date: new Date("2026-02-10T10:00:00Z"),
            end_date: new Date("2026-02-25T16:00:00Z"),
            xp_required: 1900,
            reward: 450,
            status: QuestStatus.FAILED,
            createdBy: clientUser.id,
            profils: [AdventurerType.PRIEST, AdventurerType.PALADIN, AdventurerType.WARRIOR],
        },
    });

    // === ITEMS ===
    console.log("🗡️ Création des items...");

    const items = await Promise.all([
        // Armes
        prisma.item.create({
            data: {
                name: ItemName.SWORD,
                description: "Une épée en acier trempé, fiable pour tout guerrier",
                durability: 100,
                maxDurability: 100,
                price: 250,
                type: ItemType.WEAPON,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.BOW,
                description: "Arc composite en bois d'if avec une excellente portée",
                durability: 80,
                maxDurability: 80,
                price: 200,
                type: ItemType.WEAPON,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ARCHER],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.DAGGER,
                description: "Dague légère et mortellement précise pour les attaques furtives",
                durability: 70,
                maxDurability: 70,
                price: 150,
                type: ItemType.WEAPON,
                rarity: ItemRarity.UNCOMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ROGUE],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.STAFF,
                description: "Bâton en bois ancien imprégné de magie élémentaire",
                durability: 90,
                maxDurability: 90,
                price: 400,
                type: ItemType.WEAPON,
                rarity: ItemRarity.RARE,
                status: ItemStatus.AVAILABLE,
                profiles: [
                    AdventurerType.ARCANE_MAGE,
                    AdventurerType.GEOMANCER,
                    AdventurerType.ENCHANTER,
                ],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.AXE,
                description: "Hache de guerre lourde capable de fendre les armures",
                durability: 95,
                maxDurability: 95,
                price: 300,
                type: ItemType.WEAPON,
                rarity: ItemRarity.UNCOMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.BARBARIAN, AdventurerType.WARRIOR],
                isConsumable: false,
            },
        }),

        // Armures et équipements
        prisma.item.create({
            data: {
                name: ItemName.ARMOR,
                description: "Armure complète en plates d'acier renforcé",
                durability: 150,
                maxDurability: 150,
                price: 600,
                type: ItemType.ARMOR,
                rarity: ItemRarity.RARE,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.SHIELD,
                description: "Bouclier rond en chêne renforcé de métal",
                durability: 120,
                maxDurability: 120,
                price: 180,
                type: ItemType.ARMOR,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.HELMET,
                description: "Casque en acier poli offrant une bonne protection",
                durability: 80,
                maxDurability: 80,
                price: 220,
                type: ItemType.ARMOR,
                rarity: ItemRarity.UNCOMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [
                    AdventurerType.WARRIOR,
                    AdventurerType.PALADIN,
                    AdventurerType.BARBARIAN,
                ],
                isConsumable: false,
            },
        }),

        // Potions
        prisma.item.create({
            data: {
                name: ItemName.HEALING_POTION,
                description: "Potion de soin restaure 100 points de vie",
                quantity: 5,
                price: 50,
                type: ItemType.POTION,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [],
                isConsumable: true,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.HEALING_POTION,
                description: "Potion de soin majeure restaure 250 points de vie",
                quantity: 3,
                price: 120,
                type: ItemType.POTION,
                rarity: ItemRarity.RARE,
                status: ItemStatus.AVAILABLE,
                profiles: [],
                isConsumable: true,
            },
        }),

        // Items magiques
        prisma.item.create({
            data: {
                name: ItemName.MAGIC_RING,
                description: "Anneau enchanté augmentant la puissance magique",
                durability: 200,
                maxDurability: 200,
                price: 800,
                type: ItemType.MISC,
                rarity: ItemRarity.EPIC,
                status: ItemStatus.AVAILABLE,
                profiles: [
                    AdventurerType.ARCANE_MAGE,
                    AdventurerType.ENCHANTER,
                    AdventurerType.PRIEST,
                ],
                isConsumable: false,
            },
        }),

        // Flèches
        prisma.item.create({
            data: {
                name: ItemName.ARROW,
                description: "Carquois de 20 flèches en bois d'orme avec pointes en acier",
                quantity: 20,
                price: 30,
                type: ItemType.MISC,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ARCHER],
                isConsumable: true,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.ARROW,
                description: "Flèches enchantées de feu, 10 unités",
                quantity: 10,
                price: 150,
                type: ItemType.MISC,
                rarity: ItemRarity.RARE,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ARCHER],
                isConsumable: true,
            },
        }),

        // Items légendaires
        prisma.item.create({
            data: {
                name: ItemName.SWORD,
                description:
                    "Épée légendaire Flammegivre - Une lame qui brûle et glace simultanément",
                durability: 250,
                maxDurability: 250,
                price: 5000,
                type: ItemType.WEAPON,
                rarity: ItemRarity.LEGENDARY,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.STAFF,
                description:
                    "Bâton des Arcanes Éternelles - Concentre une puissance magique infinie",
                durability: 300,
                maxDurability: 300,
                price: 8000,
                type: ItemType.WEAPON,
                rarity: ItemRarity.LEGENDARY,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ARCANE_MAGE],
                isConsumable: false,
            },
        }),

        // Items épiques variés
        prisma.item.create({
            data: {
                name: ItemName.ARMOR,
                description: "Armure du Dragon Noir - Forgée à partir d'écailles de dragon",
                durability: 200,
                maxDurability: 200,
                price: 3500,
                type: ItemType.ARMOR,
                rarity: ItemRarity.EPIC,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.BOW,
                description:
                    "Arc Ailé du Chasseur - Tire des flèches qui ne manquent jamais leur cible",
                durability: 150,
                maxDurability: 150,
                price: 2800,
                type: ItemType.WEAPON,
                rarity: ItemRarity.EPIC,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ARCHER],
                isConsumable: false,
            },
        }),

        // Items communs supplémentaires
        prisma.item.create({
            data: {
                name: ItemName.SHIELD,
                description: "Petit bouclier en bois renforcé",
                durability: 60,
                maxDurability: 60,
                price: 80,
                type: ItemType.ARMOR,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.WARRIOR, AdventurerType.PALADIN, AdventurerType.ROGUE],
                isConsumable: false,
            },
        }),
        prisma.item.create({
            data: {
                name: ItemName.DAGGER,
                description: "Dague empoisonnée - Inflige des dégâts de poison sur la durée",
                durability: 50,
                maxDurability: 50,
                price: 450,
                type: ItemType.WEAPON,
                rarity: ItemRarity.RARE,
                status: ItemStatus.AVAILABLE,
                profiles: [AdventurerType.ROGUE],
                isConsumable: false,
            },
        }),

        // Potions variées
        prisma.item.create({
            data: {
                name: ItemName.HEALING_POTION,
                description: "Potion de régénération - Restaure lentement 500 PV sur 30 secondes",
                quantity: 2,
                price: 300,
                type: ItemType.POTION,
                rarity: ItemRarity.EPIC,
                status: ItemStatus.AVAILABLE,
                profiles: [],
                isConsumable: true,
            },
        }),
    ]);

    // Ajouter tous les items à l'inventaire de la guilde
    console.log("📦 Ajout des items à l'inventaire de la guilde...");

    await prisma.itemOnGuild.createMany({
        data: items.map((item) => ({
            guildId: guild.id,
            itemId: item.id,
        })),
    });

    // === ASSIGNATION POUR LA QUÊTE EN COURS ===
    console.log("🎯 Création des assignations...");

    // Quest 2 (IN_PROGRESS) - Nettoyer les Mines Oubliées [BARBARIAN, PALADIN]
    const assignment1 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer503.id, // Gorak Stonefist (BARBARIAN)
            questId: quest2.id,
        },
    });

    // Quest 3 (APPROVED) - Escorter la caravane marchande [ROGUE, WARRIOR, PRIEST]
    const assignment2 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer512.id, // Doran Quickblade (ROGUE, ON_QUEST)
            questId: quest3.id,
        },
    });

    const assignment3 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer502.id, // Kaela Stormshield (PRIEST)
            questId: quest3.id,
        },
    });

    // Quest 4 (COMPLETED) - Chasse au Basilic [ARCHER, WARRIOR, ALCHEMIST]
    const assignment4 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer505.id, // Ryn Featherstep (ARCHER)
            questId: quest4.id,
        },
    });

    // Quest 6 (IN_PROGRESS) - Exploration des Catacombes [ROGUE, ARCANE_MAGE, ENCHANTER]
    const assignment5 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer507.id, // Liora Dawnspark (ARCANE_MAGE)
            questId: quest6.id,
        },
    });

    const assignment6 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer501.id, // Borin Ironfist (ENCHANTER)
            questId: quest6.id,
        },
    });

    // Quest 8 (COMPLETED) - Collecter des herbes rares [ALCHEMIST, GEOMANCER]
    const assignment7 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer511.id, // Selene Frostweaver (GEOMANCER)
            questId: quest8.id,
        },
    });

    // Quest 10 (IN_PROGRESS) - Forger l'armure du champion [BLACKSMITH, GEOMANCER]
    const assignment8 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer511.id, // Selene Frostweaver (GEOMANCER)
            questId: quest10.id,
        },
    });

    // Quest 11 (APPROVED) - Bannir l'esprit maléfique [PRIEST, ARCANE_MAGE, ENCHANTER]
    const assignment9 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer507.id, // Liora Dawnspark (ARCANE_MAGE)
            questId: quest11.id,
        },
    });

    const assignment10 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer508.id, // Mira Lightveil (PRIEST)
            questId: quest11.id,
        },
    });

    // Quest 12 (FAILED) - Récupération de reliques anciennes [PRIEST, PALADIN, WARRIOR]
    const assignment11 = await prisma.questAssignment.create({
        data: {
            adventurerId: adventurer502.id, // Kaela Stormshield (PRIEST)
            questId: quest12.id,
        },
    });

    // === AJOUT DES ITEMS AUX ASSIGNATIONS ===
    console.log("⚔️ Ajout des items aux assignations...");

    await prisma.itemOnQuestAssignment.createMany({
        data: [
            // Assignment 1 (Gorak - Nettoyer les Mines) - 3 items
            { questAssignmentId: assignment1.id, itemId: items[4].id }, // AXE
            { questAssignmentId: assignment1.id, itemId: items[7].id }, // HELMET
            { questAssignmentId: assignment1.id, itemId: items[8].id }, // Potion de soin

            // Assignment 2 (Doran - Escorter caravane) - 2 items
            { questAssignmentId: assignment2.id, itemId: items[2].id }, // DAGGER
            { questAssignmentId: assignment2.id, itemId: items[8].id }, // Potion de soin

            // Assignment 3 (Kaela - Escorter caravane) - 2 items
            { questAssignmentId: assignment3.id, itemId: items[10].id }, // MAGIC_RING
            { questAssignmentId: assignment3.id, itemId: items[9].id }, // Potion majeure

            // Assignment 4 (Ryn - Chasse au Basilic) - 4 items
            { questAssignmentId: assignment4.id, itemId: items[1].id }, // BOW
            { questAssignmentId: assignment4.id, itemId: items[11].id }, // ARROW (commun)
            { questAssignmentId: assignment4.id, itemId: items[12].id }, // ARROW (enchantées)
            { questAssignmentId: assignment4.id, itemId: items[19].id }, // Potion régénération

            // Assignment 5 (Liora - Exploration Catacombes) - 3 items
            { questAssignmentId: assignment5.id, itemId: items[3].id }, // STAFF
            { questAssignmentId: assignment5.id, itemId: items[10].id }, // MAGIC_RING
            { questAssignmentId: assignment5.id, itemId: items[8].id }, // Potion de soin

            // Assignment 6 (Borin - Exploration Catacombes) - 2 items
            { questAssignmentId: assignment6.id, itemId: items[3].id }, // STAFF
            { questAssignmentId: assignment6.id, itemId: items[11].id }, // ARROW

            // Assignment 7 (Selene - Collecter herbes rares) - 2 items
            { questAssignmentId: assignment7.id, itemId: items[3].id }, // STAFF
            { questAssignmentId: assignment7.id, itemId: items[8].id }, // Potion de soin

            // Assignment 8 (Selene - Forger l'armure) - 3 items
            { questAssignmentId: assignment8.id, itemId: items[13].id }, // ARMOR du dragon
            { questAssignmentId: assignment8.id, itemId: items[5].id }, // ARMOR
            { questAssignmentId: assignment8.id, itemId: items[6].id }, // SHIELD

            // Assignment 9 (Liora - Bannir esprit) - 2 items
            { questAssignmentId: assignment9.id, itemId: items[14].id }, // STAFF légendaire
            { questAssignmentId: assignment9.id, itemId: items[9].id }, // Potion majeure

            // Assignment 10 (Mira - Bannir esprit) - 2 items
            { questAssignmentId: assignment10.id, itemId: items[10].id }, // MAGIC_RING
            { questAssignmentId: assignment10.id, itemId: items[19].id }, // Potion régénération

            // Assignment 11 (Kaela - Récupération reliques) - 1 item
            { questAssignmentId: assignment11.id, itemId: items[12].id }, // ARROW enchantées
        ],
    });

    // === TRANSACTIONS BANCAIRES ===
    console.log("💳 Création des transactions bancaires...");

    const bank = await prisma.bank.findUnique({
        where: { guildId: guild.id },
    });

    await prisma.transaction.createMany({
        data: [
            // Transactions de revenus (quêtes complétées)
            {
                amount: 400,
                date: Math.floor(new Date("2025-11-18T18:00:00Z").getTime() / 1000),
                name: "Récompense - Chasse au Basilic",
                bankId: bank!.id,
            },
            {
                amount: 250,
                date: Math.floor(new Date("2025-11-25T17:00:00Z").getTime() / 1000),
                name: "Récompense - Collecter des herbes rares",
                bankId: bank!.id,
            },
            // Transactions de revenus (quêtes en cours - anticipation)
            {
                amount: 300,
                date: Math.floor(new Date("2025-10-25T09:00:00Z").getTime() / 1000),
                name: "Avance - Nettoyer les Mines Oubliées",
                bankId: bank!.id,
            },
            {
                amount: 220,
                date: Math.floor(new Date("2025-11-28T08:00:00Z").getTime() / 1000),
                name: "Avance - Escorter la caravane marchande",
                bankId: bank!.id,
            },
            {
                amount: 350,
                date: Math.floor(new Date("2026-02-01T10:00:00Z").getTime() / 1000),
                name: "Avance - Exploration des Catacombes",
                bankId: bank!.id,
            },
            {
                amount: 750,
                date: Math.floor(new Date("2026-01-10T09:00:00Z").getTime() / 1000),
                name: "Avance - Forger l'armure du champion",
                bankId: bank!.id,
            },
            // Dépenses (équipement et fournitures)
            {
                amount: -150,
                date: Math.floor(new Date("2025-10-20T14:30:00Z").getTime() / 1000),
                name: "Achat - Équipement de base pour aventuriers",
                bankId: bank!.id,
            },
            {
                amount: -200,
                date: Math.floor(new Date("2025-10-22T10:00:00Z").getTime() / 1000),
                name: "Achat - Potions de soin (stock)",
                bankId: bank!.id,
            },
            {
                amount: -300,
                date: Math.floor(new Date("2025-11-05T09:00:00Z").getTime() / 1000),
                name: "Réparation - Équipements endommagés",
                bankId: bank!.id,
            },
            {
                amount: -100,
                date: Math.floor(new Date("2025-11-15T16:00:00Z").getTime() / 1000),
                name: "Approvisionnement - Fournitures générales",
                bankId: bank!.id,
            },
            // Pénalités et pertes
            {
                amount: -450,
                date: Math.floor(new Date("2026-02-25T16:00:00Z").getTime() / 1000),
                name: "Perte - Échec de la mission (Récupération reliques)",
                bankId: bank!.id,
            },
            // Revenus divers
            {
                amount: 80,
                date: Math.floor(new Date("2025-12-01T15:00:00Z").getTime() / 1000),
                name: "Vente - Objets de rebut et équipements usagés",
                bankId: bank!.id,
            },
        ],
    });

    console.log("✅ Seed terminé avec succès!");
    console.log(`
📊 Résumé (basé sur les mocks):
- 1 Guilde créée (Guilde des Aventuriers)
- 13 Aventuriers créés (tous dans la même guilde)
- 12 Quêtes créées (PENDING, IN_PROGRESS, APPROVED, COMPLETED, FAILED)
- 20 Items créés (armes, armures, potions, items magiques)
- 11 Assignations créées avec items variés
- 12 Transactions bancaires logiques

🔐 Identifiants de test:
- Aventuriers: Borin Ironfist, Kaela Stormshield, Gorak Stonefist, etc.
- Client: Lyria Moonshadow
- Mot de passe: password123

💡 Les assignations correspondent aux profils requis et incluent des items!
💡 Les transactions reflètent les revenus et dépenses liés aux quêtes!
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
