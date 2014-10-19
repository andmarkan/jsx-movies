.PHONY: view

view:
	 browserify -t reactify -r ./app/movie.jsx:view > static/view.js
