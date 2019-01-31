window.addEventListener('load', function(){
	window.app = new Vue({
		el: '#notes',
		
		data: {
			colors: [
				'rgb(255, 150, 150)',
				'rgb(255, 255, 150)',
				'rgb(255, 255, 255)',
				'rgb(255, 150, 255)',
				'rgb(150, 255, 255)',
			],
			
			editing: false,
			
			notes: [],
		},
		
		methods: {
			addNote: function(){
				this.notes.push({
					color: 'rgb(255, 255, 255)',
					message: 'Hello, World!',
				});
			},
			
			removeNote: function(note){
				let i = this.notes.indexOf(note);
				
				if(i == -1){
					return;
				}
				
				this.notes.splice(i, 1);
			},
		},
	});
});

document.addEventListener('click', function(){
	// Unfocus note
	
	if(!document.querySelector('#notes:hover')){
		window.app.editing = false;
	}
});