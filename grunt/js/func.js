const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Button } = wp.components;
 
registerBlockType( 'powerradach/teammodul', {
	title:  'Team Modul',
    description: 'Dieses Modul fügt eine Team Einzel Ansicht zum Gutenberg Editor hinzu.',	
    icon: {
	  background: '#f0dd00',
	  foreground: '#fff',
      src: 'universal-access-alt',
    },
    category: 'prmodule',
	keywords: [ 'team', 'mitarbeiter', 'teammodul' ],
	supports: {
		html: false,
		className: false,
		customClassName: false
	},
	
	// Custom Fields 
	attributes: {

		// Team Name  
		teamNameattr: {
			type: 'array',
			source: 'children',
			selector: '.team-name',
		}, 

		// Team Desc
		teamDescattr: {
			type: 'array',
			source: 'children',
			selector: '.team-desc',
		}, 

		// Media ID 
		mediaID: {
			type: 'number',
		},

		// Media URL s
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.team-image',
			attribute: 'src',
		},

	},

	edit: ( props ) => {
		// Import attr 
		const { attributes: { teamNameattr, teamDescattr, mediaID, mediaURL }, setAttributes, className } = props;

		// Add save Team Name 
		const teamNameSave = ( newContent ) => {
			setAttributes( { teamNameattr: newContent } );
		};

		// Save Team Desc 

		const teamDescSave = ( newContent ) => {
			setAttributes( { teamDescattr: newContent } ); 
		}; 

		// Team Image Select
		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			});
		};

		// Return Markup 
		return (
			<div className="pr-team-item-wraper-outer">
				<div className="pr-team-item-inner">
				    <div className="image-wrapper">
						<MediaUpload
								onSelect={ onSelectImage }
								type="image"
								value={ mediaID }
								render={ ( { open } ) => (
									<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
										{ ! mediaID ? __( 'Teambild hochladen') : <img className="team-image" src={ mediaURL } /> }
									</Button>
								) }
							/>
					</div>
					<div className="team-content">
						<RichText
							tagName="h3"
							className="team-name"
							onChange={ teamNameSave }
							value={ teamNameattr }
							placeholder="Name der Person"
						/>	
						<RichText
							tagName="div"
							className="team-desc"
							onChange={ teamDescSave }
							value={ teamDescattr }
							placeholder="Beschreibung der Person"
						/>					
					</div>
				</div>
			</div>
		);
	},
	
	// FrontEnd
	save: ( props ) => {
		const {
			className,
			attributes: {
				teamNameattr,
				mediaURL, 
				mediaID, 
				teamDescattr
			},
		} = props; 

		// Return Content  in Frontend 
		return(
			<div className="pr-team-item-wraper-outer">
				<div className="pr-team-item-inner">
				    <div className="image-wrapper">
						{   mediaURL && (
								<img className="team-image" src={ props.attributes.mediaURL } alt={ __( 'Team Bild' ) } />
							)
						}
					</div>
					<div className="team-content">
						<RichText.Content
							tagName="h3"
							className="team-name"
							value={ props.attributes.teamNameattr } 
						/>
						<RichText.Content
							tagName="div"
							className="team-desc"
							value={ props.attributes.teamDescattr } 
						/>
					</div>
				</div>
			</div>
		); 
	},
});