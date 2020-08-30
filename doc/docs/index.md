# Twitteor

## Installation

* meteor npm install

## Généralités

Ce projet est un réseau social inspiré de twitter. On peut écrire des posts, suivre des gens, afficher leurs posts, les commenter...

## S'inscrire / se connecter 

### inscription 
Afin de s'inscrire sur notre réseau social il faut cliquer sur "signe in" en haut de la page, vous sera proposé de renseigner un pseudo ainsi qu'un mot de passe, bien sûr si l'utilisateur existe déja un message averti l'utilisateur

### connexion 

Afin de se connecter, il suffit tout simplement de renseigner ses identifiants dans le champs "signe in" 

## page d'accueil / qui je suis ( /home) 

Nous arrivons sur la page d'acceuil de notre site où nous sommes directement dans la rubrique "Qui je suis" qui nous permet de voir les posts des utilisateurs que nous suivons

## page Tout le monde (/home/all)

Dans la rubrique "Tout le monde" nous pouvons voir chaque posts que les utilisateurs ont posté

##comment ecrire un poster

Sur chacunes des pages "Qui je suis" et "Tout le monde"  nous avons la possibilité d'écrire un post, il suffit d'écrire ce que l'on veut et de cliquer sur "Poster"

##composition d'un post 

Un post est composé :

  - d'un texte que l'utilisateur a écrit

  - d'un auteur, celui qui a écrit le post, marche également comme un lien vers le profil de l'auteur 
 
  - d'une fonctionnalité de commentaire, où il est possible de répondre à un post d'un utilisateur 

##Profil utilisateur 

Sur le profil d'un utilisateur nous pouvons voir tout d'abord son nom ainsi que les posts qu'il a écrit,
nous voyons égualement combien d'utilisateurs suivent ce profil et combien d'utilisateurs nous suivons 

une posibilité de modifier le nom d'utilisateur est également mis en place en cliquant sur "Modifier profil" 

 
##colection utilisé

###Post 

content : de type String contient le texte des posts
parent : permet de savoir si il y'a un post parent
createdAt : contient l'information de quand il a etais crée, sert pour trier les post
author : permet de savoir qui a crée le post


###follows

followed : permet de savoir qui nous suivons
follower : permet de savoir qui nous suis 
