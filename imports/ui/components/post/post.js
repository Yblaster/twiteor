import './post.html';

Template.post.events({
	'update'(event){
		event.preventDefault();
		var teste = document.getElementById("test");
		teste.style.diplay = 'none';
	}
})



function show(){
	document.getElementById("test").style.display = 'none';
}