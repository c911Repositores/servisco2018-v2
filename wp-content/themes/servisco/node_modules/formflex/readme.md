# Formflex
Démo et exemples détaillés des possibilités (avec code correspondant) ici (GitHub Page) :
### https://zenike.github.io/formflex/
`formflex` est un plugin de personnalisation de formulaire. Il permet de configurer facilement les différents éléments constituants un formulaire en changeant uniquement des variables `LESS`.
Il ajoute également des fonctions avancées en javascript comme un système d'affichage/masquage en fonction des réponses précédentes choisies.

# Dépendances
- `jQuery`: une version récente sans limitation précise
- `Less`: ce plugin utilise LESS pour la personnalsation du formulaire

# Installation
1. récuperer les fichiers `formflex.less` et `formflex.js` à la racine du projet GitHUb
2. inclure le fichier `formflex.js` dans la document avant la fermeture de la balise `</body>`
3. lier et génerer un css à partir de `formflex.less`
4. incorporer les variables de personnalisation ci dessous dans les less du projet

# Variables de personnalisation
- variables less à inclure avant formflex.less
```less
/* FORMFLEX GENERAL */
@formflex_input_height: 60px;
@formflex_input_bgcolor: #333;
@formflex_option_bgcolor: #333;
@formflex_input_font_size: 16px;
@formflex_input_font_weight: normal;
@formflex_input_fontcolor: #fff;
@formflex_input_round: 5px;
@formflex_input_disabled_bgcolor: #888;
@formflex_icons_fz: 18px;
@formflex_bd: skyblue;
@formflex_bd_hover: red;
@formflex_main_color_theme: @theme;
@formflex_main_color_theme_hover: @theme_light;
@formflex_main_color_theme_mousedown: @theme_dark;
@formflex_mobile_size_switch: 500px;

/* FORMFLEX NAME */
@formflex_name_fz: 12px;
@formflex_name_color: #333;
@formflex_name_color_hover: #000;
@formflex_name_font_weight: normal;

/* FORMFLEX CHECKSKIN */
@formflex_checkskin_fz: 18px;
@formflex_checkskin_checkbox_round: 5px;
@formflex_checkskin_iconcolor: #fff;
@formflex_checkskin_input_size_decal: 0px;
@formflex_checkskin_bg_color: #fff;
@formflex_checkskin_bg_color_checked: @theme;
@formflex_checkskin_bg_color_checked_hover: @theme_light;
@formflex_checkskin_bg_color_mousedown: @theme_dark;
@formflex_checkskin_bd_color: #aaa;
@formflex_checkskin_bd_color_hover: #555;
```
