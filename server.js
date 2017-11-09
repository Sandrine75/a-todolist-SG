// PROJECT TIME : To Do List

/*Création d’une « to do list » minimaliste
La « to do list » sera matérialisé en javascript par un tableau.
Chaque entrée du tableau représentera une tâche à faire ou un rdv.
La « do to list » devra être gérée totalement par un serveur web.*/

/*Step
- Création d’un serveur web
- Astuce : pour vérifier que le serveur fonctionne bien, essayez d’envoyer au navigateur le message suivant : « Page chargée »
- Création d’une variable nommée « todoList » et qui va contenir un tableau.
- Remplir ce tableau avec les tâches suivantes:
                rdv chez le médecin
                chercher colis au point relais
                dej pro avec John
                cours de tennis
- Parcourir la « to do list » avec une boucle pour pouvoir accéder à chacune des tâches et rdv et de les renvoyer au navigateur.*/

/*Attention Pour envoyer une information au navigateur le serveur doit utiliser la méthode res.write() en mettant dans les parenthèses la valeur à envoyer.
Il est possible d’utiliser plusieurs fois à la suite la méthode res.write()
Ne pas oublier d’initialiser la communication avec le navigateur grâce à  la méthode res.writeHead(200) et de terminer la communication en utilisant la méthode res.end();
res.end() doit s’utiliser en dernier car après l’avoir exécuté vous ne pourrez plus utiliser res.write()*/

/* Allons plus loin : L’envoie d’informations entre le client (navigateur) et le serveur se fera par l’URL
Ne pas oublier d’installer les modules « url » et « querystring »  côté serveur permettant d’exploiter les informations envoyées par le navigateur
-----------------------------------------------------------------------------------------------------------------------------------------------------*/


var http = require("http");
var url  = require("url");
var querystring = require("querystring");
var todolist = [
    "rdv chez le médecin",        
    "chercher colis au point relais",
    "dej pro avec John",
    "cours de tennis" 
];

var server = http.createServer(
  function(req, res) {
      var urlquery  = url.parse(req.url).query;
      var params = querystring.parse(urlquery);
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
     
      for(var i=0; i<todolist.length; i++ ) {
      res.write(todolist[i]+"<br>")
      }
      
      res.end();
  }
);
server.listen(8082);
