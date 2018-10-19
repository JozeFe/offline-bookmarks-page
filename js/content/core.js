var pagesNum = 12;
var menuNum = 2;

function link(name, link, glyph){
	if (glyph) {
		return {
			name: name,
			link: link,
			glyph: glyph,
		};
	} else {
		return {
			name: name,
			link: link,
		};
	}
};

function topic(name, glyph){
	if (glyph) {
		return {
			name: name,
			link: "#",
			active: "true",
			glyph: glyph,
		};
	} else {
		return {
			name: name,
			link: "#",
			active: "true",
		};
	}
};

function createPart(num, links){
	eleA = "";
	glyph = "";
	if (links) {
	for (i = 0; i < links.length; i++) {
		glyph = (links[i].glyph) ? " <span class='text-right glyphicon glyphicon-" + links[i].glyph + "' aria-hidden='true' style='float:right'></span>" : "";
		if (links[i].name === "input") {
			eleA += "<input type='text' id='" + links[i].link + "' onkeyup='search(\"" + links[i].link + "\")' placeholder='Search'>";
		} else if (links[i].active){
			//eleA += "<a class='list-group-item active' href='#'>" + links[i].name + glyph + "</a>";
			eleA += "<a class='list-group-item active' href='#'>" + links[i].name + "</a>";
		} else {
			eleA += "<a class='list-group-item' href='" + links[i].link + "'>" + links[i].name + glyph + "</a>";
		}
	}
	}
	output="<div id='page" + num + "' class='col-md-2 list-group' style='display:none'>" + eleA + "</div>";
	return output;
};


function show(menu, pages = []) {
	// change parts
	for (i = 1; i <= pagesNum; i++) {
		document.getElementById('page' + i).style.display='none';
	}
	for (i = 0; i < pages.length; i++) {
		document.getElementById('page' + pages[i]).style.display='block';
	}
	// change menu active
	for (i = 1; i <= menuNum; i++) {
		document.getElementById('menu' + i).className = '';
	}
	document.getElementById('menu' + menu).className = "active";
	return false;
};

function search(id){
	var list = $("#" + id).siblings();
	input = document.getElementById(id);
  	filter = input.value.toUpperCase();

	for (var i = 0; i < list.length; i++) {
		a = list[i];
		if (!$(a).hasClass('active')) {
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				a.style.display = "";
			} else {
				a.style.display = "none";
			}
		}
	}
};

function menu(menu) {
  switch (menu) {
    case 1:
      show(1, [1, 2, 3, 4, 5, 6]);
      break;
    case 2:
      show(2, [7, 8, 9, 10, 11, 12]);
      break;
    default:
      show(1, [1, 2, 3, 4, 5, 6]);
      break;
  }
}
