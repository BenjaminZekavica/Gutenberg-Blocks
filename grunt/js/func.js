const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'powerradach/teammodul', {
	title: 'Team Modul',
	icon: 'universal-access-alt',
	category: 'layout',

  	attributes: {
        teamename: {
          type: 'array',
          source: 'text',
          selector: '.team-name',
        },
  		  teamdescription: {
    			type: 'array',
    			source: 'children',
    			selector: 'p',
    		},
        teambild: {
          type: 'string',
          source: 'attribute',
          selector: '.team-image',
          attribute: 'src',
        }
  	},

	edit( { attributes, className, setAttributes } ) {


    // Team Image

    const { teambild } = attributes;
    function teamimagechangeContent( newContent ) {
         setAttributes( { teambild: newContent } );
    }

    // Team Name

    const { teamename } = attributes;
    function teamnamechangeContent( newContent ) {
         setAttributes( { teamename: newContent } );
    }


    // Team Description
		const { teamdescription } = attributes;
		function teamdescriptionchangeContent( newContent ) {
			   setAttributes( { teamdescription: newContent } );
		}

		return (

      <div class="team-wrapper">
          <div class="team-image">

          </div>
          <div class="team-content">
               <div class="team-name">
                   <RichText
                    tagName="h3"
                    className={ className }
                    onChange={ teamnamechangeContent }
                    value={ teamename }
                  />
               </div>
               <div class="team-description">
                   <RichText
                    tagName="p"
                    className={ className }
                    onChange={ teamdescriptionchangeContent }
                    value={ teamdescription }
                  />
               </div>
          </div>
      </div>
		);
	},

	save( { attributes, className } ) {

    // Team Image
    const { teambild } = attributes;

    // Team Name
    const { teamename } = attributes;

    // Team Description
		const { teamdescription } = attributes;

		return (

        <div class="team-wrapper">
            <div class="team-image">
                
            </div>
            <div class="team-content">
                  <div class="team-name">
                      <RichText.Content
                        tagName="h4"
                        className={ className }
                        value={ teamename }
                      />
                  </div>
                 <div class="team-description">
                     <RichText.Content
                       tagName="p"
                       className={ className }
                       value={ teamdescription }
                     />
                 </div>
            </div>
        </div>
		);

	},
});
