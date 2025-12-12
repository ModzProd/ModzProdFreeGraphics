// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("page2.html", "Untitled Page", "All Rights Reserveds 2025   ", "");
   this[database_length++] = new SearchPage("page1.html", "Untitled Page", "All Rights Reserveds 2025   ", "");
   this[database_length++] = new SearchPage("index.html", "Home", " ", "");
   this[database_length++] = new SearchPage("pws.html", "ModzProd", "EXPANSIONS DLC'S  ", "");
   this[database_length++] = new SearchPage("pws1.html", "ModzProd", " ", "");
   return this;
}
