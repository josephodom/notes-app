window.addEventListener('load', function(){
	const app = new Vue({
		el: '#notes',
		
		data: {
			colors: [
				'rgb(255, 0, 0)',
				'rgb(255, 255, 0)',
				'rgb(255, 255, 255)',
				'rgb(255, 0, 255)',
				'rgb(0, 255, 255)',
			],
			
			editing: false,
			
			notes: [
				{
					color: 'rgb(255, 0, 255)',
					message: 'Hello!',
				},
				
				{
					color: 'rgb(255, 255, 255)',
					message: 'Hi',
				},
			],
		},
		
		methods: {
			
		},
	});
});