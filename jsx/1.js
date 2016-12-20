var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var child3 = React.createElement('li',{ id :'test' }, 'Third Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2, child3);
ReactDOM.render(
	root,
	document.getElementById('example1')
);
ReactDOM.render(
	React.createElement('h2',{name:'title'},'lesson one'),
	document.getElementById('test')
);