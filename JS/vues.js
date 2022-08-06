const app = new Vue({
    el: '#app',
    data: {
        

        // ---------- Onglets (en français et anglais) ---------- //
        titles: ["Accueil","Téléchargement","Qui sommes nous ?","Mise à jour"],
        title: ["Accueil","Téléchargement","Qui sommes nous ?","Mise à jour"],
        titleeng: ["Welcome","Download","Who are we ?","Update"],
        lang: "EN", // language button

        // ---------- Index page ---------- //
        titre_i_1: "Bienvenue !",
        para_i_1: "Vous etes actuellement sur le site de notre projet dans le cadre de la specialite Numerique et Sciences Informatique au Lycee Jean-Baptiste Schwilgue de Selestat !",
        
        titre_i_2: "LE CONCEPT",
        para_i_2: "notre projet consiste a reproduire le jeu du dinosaure (A.K.A le jeu quand il n'y a plus internet) de A a Z en python et sur une duree d'un an",
    
        titre_i_3: "Comment travaillons nous dans le projet ?",
        para_i_3: ["Comme dit dans la section du site", "une personne s\'occupe du site internet et une autre du jeu."],
    
        titre_i_4: "Le jeu",
        para_i_4: ["Fait en langage python, il utilise la ", "blibliotheque", "  Tkinter pour rendre la gestion de fenetre plus facile ainsi que la bibliotheque PyGame, essentielle pour faire un mini-jeu."],

        titre_i_5: "Le site",
        para_i_5: "Fait en HTML, CSS et JS, l'utilisation du framework Vue.js est tres utile pour permettre de changer la langue du site sans avoir a recharger la page.",

        // ---------- Download page ---------- //
        titre_d_1: "Page de telechargement",
        para_d_1: "Pour des raisons de compatibilite, nous avons laisse le jeu au format original, en .py",

        titre_d_2: "Instruction de lancement (tout OS) : ",
        para_d_2: ["Telecharger et installer Python (se rendre sur le ", "site officiel", " ou cliquer sur le boutons correspondant a votre systeme) :"],

        texte_d_1: "Telecharger le jeu via le bouton a gauche ",
        texte_d_2: "Lancer le jeu !",

        thx: "Télécharger", // thanks for download

        // ---------- About us page ---------- //
        titre_us_1: "Voici l'equipe derriere ce projet : ",
        
        texte_ju_1: ["Developpeur et ", "designer UX/UI du jeu"],

        texte_ya_1: ["Developpeur Front-End ", "du site"],

        // ---------- Update page ---------- //
        titre_up_1: "Comment suivre l'avancee du projet ?",
        texte_up_1: ["Aller sur le", "GitHub du projet", " pour avoir les dernieres mise a jour recentes (recommande)"],
        texte_up_2: "Suivre sur ce site l\'avancement et les differentes mises a jour du jeu (mise a jour du site peu frequente)",

        titre_up_2: "MISES A JOUR",

        desc_up_1: ["Novembre 2021", " Debut du projet et mise en place du cahier des charges"],
        desc_up_2: ["Decembre 2021", " Ajout de Tkinter pour la gestion de fenetre et ajout du menu d'acceuil"],
        desc_up_3: ["Janvier 2022", " Creation du noyau du jeu"],
        desc_up_4: ["Fevrier 2022", "Premiere version fonctionnelle du jeu"],
        desc_up_5: ["Mars 2022", "Ajout des Credits, niveaux de rapidite"],
        desc_up_6: ["Mai 2022", "Ajout des pseudos et finalisation du projet"],
        desc_up_7: ["Bientôt", "Mise a jours future"],

        // ---------- copyrights ---------- //
        copyrights_t: "Tous Droits Réservés,",

        // ---------- misc ---------- //
        et: "et ",

    },

    methods: {
        dlchange: function() {
            if (this.lang == "FR") {
                this.thx = "Thanks !"
            }
            else {
                this.thx = "Merci !"
            } 
        },

        langchange: function() {
            if (this.lang == "EN") {
                this.lang = "FR"
                this.titles = ["Welcome","Download","Who we are ?","Progression"]

                // ---------- Page d'acceuil ---------- //
                this.titre_i_1 = "Welcome !"
                this.para_i_1 = "You are currently on the website representing our project that we are doing in the Computer Science class of the Selestat's Jean-Baptiste Schwilgue high school!"
                
                this.titre_i_2 = "The concept"
                this.para_i_2 = "Our project consists to reproduce the Dino Game (A.K.A the game when you doesn't have internet connection) from scratch in python, during 1 year."
            
                this.titre_i_3 = "How do we work in the project ?"
                this.para_i_3 = ["Like said in the ", " section of the site, one person have to work on the website and the other have to make the game."]
            
                this.titre_i_4 = "The game"
                this.para_i_4 = ["Made in Python language, it uses the Tkinter ", "library", "  to make the window management more easier and also the PyGame library, essential to make a mini-game."]
        
                this.titre_i_5 = "The website"
                this.para_i_5 = "Made in HTML, CSS and JS languages, it also use the Vue.js framework to permit the language changes without refreshing the entire page."

                // ---------- Page de téléchargement ---------- //
                this.titre_d_1 = "Download page"
                this.para_d_1 = "For compatibility reasons, we let the game in its original format : .py"

                this.thx = "Download", 

                this.titre_d_2 = "Download instructions (all os) : "
                this.para_d_2 = ["Download and install Python (go to the ", "official website", " or click on the corresponding button to download Python according to your operating system version) :"]

                this.texte_d_1 = "Download the game with the button on the left"
                this.texte_d_2 = "Launch and enjoy the game !"

                // ---------- Page de présentation de la team ---------- //
                this.titre_us_1 = "Here is the team behind this project :"
        
                this.texte_ju_1 = ["Developer and", "UX/UI designer of the game"]
        
                this.texte_ya_1 = ["Front-End developer ", "of the website"]

                // ---------- Page de mise à jour ---------- //
                this.titre_up_1 = "How to follow the project progress ?"
                this.texte_up_1 = ["Go to the", "project's GitHub page", " to get the last update when we upload one (recommanded)"]
                this.texte_up_2 = "Follow the project progress and the differents update on this site (infrequent updates of the site) "
        
                this.titre_up_2 = "UPDATES"
        
                this.desc_up_1 = ["November 2021", " Beginning of the project and setup of the specifications of the game"]
                this.desc_up_2 = ["December 2021", " Add of Tkinter for window management and the welcome menu"]
                this.desc_up_3 = ["January 2022", " Creation of the games's core"]
                this.desc_up_4 = ["February 2022", " First functional version of the game"]
                this.desc_up_5 = ["March 2022", " Add of Credits and speed levels"]
                this.desc_up_6 = ["May 2022", " CAdd of usernames and end of the project"]
                this.desc_up_7 = ["Soon", "Future update"]

                // ---------- copyrights ----------  //
                this.copyrights_t = "All Rights Reserved,",

                // ---------- misc ---------- //
                this.et = "and "


            }
            else {
                this.lang = "EN"
                this.titles = ["Accueil","Téléchargement","Qui sommes nous ?","Avancée"]

                // ---------- Index page ---------- //
                this.titre_i_1 = "Bienvenue !"
                this.para_i_1 = "Vous etes actuellement sur le site de notre projet dans le cadre de la specialite Numerique et Sciences Informatique au Lycee Jean-Baptiste Schwilgue de Selestat !"
                
                this.titre_i_2 = "LE CONCEPT"
                this.para_i_2 = "notre projet consiste a reproduire le jeu du dinosaure (A.K.A le jeu quand il n'y a plus internet) de A a Z en python et sur une duree d'un an"
        
                this.titre_i_3 = "Comment travaillons nous dans le projet ?"
                this.para_i_3 = ["Comme dit dans la section du site", "une personne s\'occupe du site internet et une autre du jeu."]
            
                this.titre_i_4 = "Le jeu"
                this.para_i_4 = ["Fait en langage python, il utilise la ", "blibliotheque", "  Tkinter pour rendre la gestion de fenetre plus facile ainsi que la bibliotheque PyGame, essentielle pour faire un mini-jeu."]
        
                this.titre_i_5 = "Le site"
                this.para_i_5 = "Fait en HTML, CSS et JS, l'utilisation du framework Vue.js est tres utile pour permettre de changer la langue du site sans avoir a recharger la page."

                // ---------- Download page ---------- //
                this.titre_d_1 = "Page de telechargement"
                this.para_d_1 = "Pour des raisons de compatibilite, nous avons laisse le jeu au format original, en .py"

                this.titre_d_2 = "Instruction de lancement (tout OS) : "
                this.para_d_2 = ["Telecharger et installer Python (se rendre sur le ", "site officiel", " ou cliquer sur le boutons correspondant a votre systeme) :"]

                this.texte_d_1 = "Telecharger le jeu via le bouton a gauche "
                this.texte_d_2 = "Lancer le jeu !"

                // ---------- About us page ---------- //
                this.titre_us_1 = "Voici l'equipe derriere ce projet : "
        
                this.texte_ju_1 = ["Developpeur et ", "designer UX/UI du jeu"]
        
                this.texte_ya_1 = ["Developpeur Front-End ", "du site"]

                // ---------- Update page ---------- //
                this.titre_up_1 = "Comment suivre l'avancee du projet ?"
                this.texte_up_1 = ["Aller sur le", "GitHub du projet", " pour avoir les derniere mise a jour recentes (recommande)"]
                this.texte_up_2 = "Suivre sur ce site l\'avancement et les differentes mises a jour du jeu (mise a jour du site peu frequente)"
        
                this.titre_up_2 = "MISES A JOUR"
        
                this.desc_up_1 = ["Novembre 2021", " Debut du projet et mise en place du cahier des charges"]
                this.desc_up_2 = ["Decembre 2021", " Ajout de Tkinter pour la gestion de fenetre et ajout du menu d'acceuil"]
                this.desc_up_3 = ["Bientot", " Creation du noyau du jeu"]

                // ---------- copyrights ----------  //
                this.copyrights_t = "Tous Droits Réservés,",

                // ---------- misc ---------- //
                this.et = "et "

            }
        },
    },

    computed: {
        copyrights() { // Fonction pour l'affichage de la phrase Copyright
            const year = new Date().getFullYear()
            return this.copyrights_t + " Yass " + this.et + "t00rtue, " + year + "."
        },
        
    }
})



