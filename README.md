jslides
=======

Just another jQuery slideshow.

---

My motivations for creating this project were that I was unable to find a slideshow which supported a no-JS fallback without having every slide image embedded and downloaded immediately.

The provided index.html shows usage of the slideshow.  The first image (used just as a static image in fallback - alternatively, if using a backend, a random starting image could be chosen as a fallback) is just embedded as plain HTML.  All other slides are defined with JSON.

This project requires the (unfortunately no longer updated) jQuery-tmpl plugin.
