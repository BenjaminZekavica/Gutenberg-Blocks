# Gutenberg Block Development - ES6 (React)

#### Core Blocks - Namespace 
Alle Core Blöcke sind  hier nochmals hinterlegt: https://github.com/WordPress/gutenberg/tree/master/packages/block-library/src 

| Name  |  Namespaces für die Programmierung |
|--|--|
| Archive (Auflistung) | core/archives   |
| Audio | core/audio   |
| Block | core/block   |
| Button | core/button   |
| Kategorien (Auflistung) | core/categories   |
| Code | core/code   |
| Hintergrundbild (füllend) | core/cover-image   |
| Iframe Dienste bzw. Externe Anbindungen | core/embed   |
| Download Button zur einer Datei | core/file   |
| Bildergalerie| core/gallery   |
| Überschrift | core/heading   |
| Einzelbild | core/image   |
| Letzte Kommentare (Auflistung) | core/latest-comments   |
| Letzte Beiträge (Auflistung) | core/latest-posts   |
| Liste | core/list   |
| Weiterlesen (Verlinkung) | core/more   |
| Nächste Seite | core/nextpage   |
| Textabschnitt `<p>` | core/paragraph   |
| Textabschnitt Extra | core/preformatted   |
| Zitat Extra | core/pullquote   | 
| Zitat  | core/quote   | 
| Trenner `<hr />`  | core/separator   | 
| WP Shortcode | core/shortcode   | 
| Abstand | core/spacer   | 
| Subheadline | core/subhead   | 
| Tabelle | core/table   | 
| Video | core/video   | 



#### Alle Blöcke entfernen und nur ausgewählt aktivieren

      

    function pr_gutenberg_team_allow_blocks( $allowed_block_types, $post ) {
	    return array(   
		    'powerradach/teammodul',
		    'core/paragraph',
		    'core/video',
		    'core/image',
		    'core/gallery',
		    'core/columns',
		    'core/list',
	    );
    }
    add_filter( 'allowed_block_types', 'pr_gutenberg_team_allow_blocks', 100, 2 );

