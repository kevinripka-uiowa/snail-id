export default {
  data: [

    {
      header: 'species',
      desc: 'Latin name of the species'
    },
    {
      header: 'common',
      desc: 'Common name of the species'
    },
    {
      header: 'family',
      desc: 'Family'
    },
    {
      header: 'author',
      desc: 'Discoverer'
    },
    {
      header: 'Status',
      desc: 'G system status'
    },
    {
      header: 'states',
      desc: 'states of known occurrence- right now from that one pdf'
    },
    {
      header: 'native',
      values: ['y','n'],
      desc: 'Whether native or non-native'
    },
    {
      header: 'shape',
      values: ['Globose Heliciform','Subglobose Heliciform','Depressed Heliciform','Strongly Depressed Heliciform','Beehive','Discoidal','Pupa','Succiniform','Conical','Fusiform','Bulimoid',"Urocoptiform","Decollated"],
      desc: 'Shape of shells'
    },
    {
      header: 'pupa',
      values: ['Cylindrical','Oval','Ovate-conic','Obesely Ovate-Conic','Elongate-Conic'],
      desc: 'Shapes when shell is pupa'
    },
    {
      header: 'height',
      values: ['low','high'],
      desc: 'Height'
    },
    {
      header: 'width',
      values: ['low','high'],
      desc: 'Height'
    },
    {
      header: 'whorls',
      values: ['low','high'],
      desc: 'Whorls'
    },
    {
      header: 'whorl_method',
      values: ['s','m','u'],
      desc: 's - Suture method, m - Middle of Whorl method per Burch (1962), Kearney & Cameron (1979) and Gerber (1996), u - unknown; suture method is in Pilsbry and Missouri PDF'
    },
    {
      header: 'whorl_increase',
      values: ['regular','slow','rapid'],
      desc: 'Whorls increase'
    },
    {
      header: 'sutures',
      values: [''],
      desc: 'Characteristics of sutures'
    },
    {
      header: 'imperforate',
      group: 'umbilicus',
      values: ['y','n'],
      desc: 'Presence of imperforate umbilicus',
      formDesc: 'an umbilicus completely covered by the lip',
      img: 'umbilicus-imperforate.svg'
    },
    {
      header: 'perforate',
      group: 'umbilicus',
      values: ['y','n'],
      formDesc: 'a hole for an umbilicus',
      desc: 'Presence of perforate umbilicus',
      img: 'umbilicus-perforate.svg'
    },
    {
      header: 'rimate',
      group: 'umbilicus',
      values: ['y','n'],
      formDesc: 'an umbilicus partially covered by the lip',
      desc: 'Presence of rimate umbilicus',
      img: 'umbilicus-rimate.svg'
    },
    {
      header: 'umbilicate',
      group: 'umbilicus',
      values: ['y','n'],
      formDesc: 'the umbilicus is the reverse side of the whorls',
      desc: 'Presence of umbilicate umbilicus',
      img: 'umbilicus-umbilicate.svg'
    },
    {
      header: 'umbilicus_measure',
      values: 'a number',
      desc: 'How many times the umbilicus could fit into the diameter of shell',
    },
    {
      header: 'lip_reflected',
      values: ['y','n'],
      desc: 'If lip is reflected. Lip and peristome is synonymous'
    },
    {
      header: 'deflected',
      values: ['y','n'],
      desc: 'If the final whorl drops below or is turned down from shell'
    },
    {
      header: 'teeth',
      values: ['y','n','s'],
      desc: 'Presence of teeth - s is sometimes. Teeth are also called lamellae. Sometimes teeth on the palatal or basal wall are called plicae or folds.'
    },
    {
      header: 'parietal',
      group: 'teeth_types',
      values: ['y','n','s'],
      desc: 'Presence of parietal (teeth on top attached to whorl) teeth - s is sometimes'
    },
    {
      header: 'palatal',
      group: 'teeth_types',
      values: ['y','n','s'],
      desc: 'Presence of palatal (right side of lip) teeth - s is sometimes'
    },
    {
      header: 'basal',
      group: 'teeth_types',
      values: ['y','n','s'],
      desc: 'Presence of basal (bottom side of lip) teeth - s is sometimes'
    },
    {
      header: 'columellar',
      group: 'teeth_types',
      values: ['y','n','s'],
      desc: 'Presence of columnellar (left side of lip) teeth - s is sometimes'
    },
    {
      header: 'ovate',
      group: 'aperture',
      values: ['y','n'],
      desc: 'Round opening of aperture',
      img: 'aperture-ovate.svg'
    },
    {
      header: 'lunate',
      group: 'aperture',
      values: ['y','n'],
      desc: 'Crescent shape of aperture',
      img: 'aperture-lunate.svg'
    },
    {
      header: 'slit',
      group: 'aperture',
      values: ['y','n'],
      desc: 'Aperture is a slit like in stenotrema',
      img: 'aperture-slit.svg'
    },
    {
      header: 'flattened',
      group: 'periphery',
      values: ['y','n'],
      desc: 'Flattened periphery',
      img: 'shoulder-flattened.svg'
    },
    {
      header: 'shouldered',
      group: 'periphery',
      values: ['y','n'],
      desc: 'Shouldered periphery - not round, bulging at top',
      img: 'shoulder-shouldered.svg'
    },
    {
      header: 'moderately_shouldered',
      group: 'periphery',
      values: ['y','n'],
      desc: 'Moderately shouldered periphery - not round, bulging at top, but less so',
      img: 'shoulder-moderately-shouldered.svg'
    },
    {
      header: 'rounded',
      group: 'periphery',
      values: ['y','n'],
      desc: 'Rounded periphery',
      img: 'shoulder-rounded.svg'
    },
    {
      header: 'spiral_striae',
      name: 'Spiral Striae',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of indented spiral lines/striae (go with whorls), often microscopic',
      img: 'marking-spiral.gif'
    },
    {
      header: 'lirate',
      name: 'Lirae',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of raised spiral lines (go with whorls)',
      img: 'marking-lirae.gif'
    },{
      header: 'axial_striae',
      name: 'Axial Striae',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of a series of radial/axial/transverse grooves developed as a shell grows',
      img: 'marking-striae.gif'
    },
    // {
    //   header: 'ridge_striae',
    //   name: 'Raised Axial Striae',
    //   group: 'markings',
    //   values: ['y','n'],
    //   desc: 'Presence of a series of raised radial/axial/transverse lines that are not ribs'
    // },
    // {
    //   header: 'regular_growth',
    //   name: 'Regular Axial Striae',
    //   group: 'markings',
    //   values: ['y','n'],
    //   desc: 'Presence of a series of radial/axial/transverse ridges and grooves developed as a shell grows in a regular pattern'
    // },{
    //   header: 'irregular_growth',
    //   name: 'Irregular Axial Striae',
    //   group: 'markings',
    //   values: ['y','n'],
    //   desc: 'Presence of a series of radial/axial/transverse ridges and grooves developed as a shell grows in an irregular pattern'
    // },
    {
      header: 'wrinkles',
      name: 'Wrinkles',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of when the radial/axial/transverse ridges and grooves are small, irregular, and incomplete, they are referred to as growth wrinkles',
      img: 'marking-wrinkles.gif'
    },{
      header: 'axial_ridges',
      name: 'Axial Ridges/Ribs/Costae',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of raised radial/axial/transverse ridges or larger ribs or costae',
      img: 'marking-ribs.gif'
    },{
      header: 'lamellar_ribs',
      name: 'Lamellar Ribs',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of a series of riblike structures with bladelike edges',
      img: 'marking-lamellar-ribs.gif'
    },{
      header: 'malleations',
      name: 'Malleations',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of a irregular pits',
      img: 'marking-malleations.gif'
    },{
      header: 'papillae',
      name: 'Papillae',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of raised bumps',
      img: 'marking-papillae.gif'
    },{
      header: 'puncta',
      name: 'Puncta',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of indented pits',
      img: 'marking-puncta.gif'
    },{
      header: 'hairs',
      name: 'Hairs',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of hair-like structures',
      img: 'marking-hairs.gif'
    },{
      header: 'blotches',
      name: 'Blotches',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of blotches of a color',
      img: 'marking-blotches.gif'
    },{
      header: 'bands',
      name: 'Bands',
      group: 'markings',
      values: ['y','n'],
      desc: 'Presence of striped lines following whorls',
      img: 'marking-bands.gif'
    },
    {
      header: 'operculum',
      name: 'Operculum',
      values: ['y','n'],
      desc: 'Presence of an operculum'
    },
    {
      header: 'pedal',
      name: 'Pedal',
      values: ['y','n'],
      desc: 'Whether the pedal groove is conspicuous, AKA tripartate.'
    },
    {
      header: 'shell_color',
      name: 'Shell Colors',
      values: 'comma separated list of colors shell can be',
      desc: 'Colors of shells'
    },{
      header: 'animal',
      name: 'Animal Description',
      values: 'text',
      desc: 'A description of the body'
    },

  ],
  colors: {
    "horn": {
      label: "Horn",
      hex: '#123456'
    },
  },
  groups: [
    {
      label: 'umbilicus',
      exclusive: false
    },
    {
      label: 'teeth_types',
      exclusive: false
    },
    {
      label: 'periphery',
      desc: 'the edge shape of body whorl',
      exclusive: false
    },
    {
      label: 'aperture',
      desc: 'shape of aperture',
      exclusive: true
    },
    {
      label: 'markings',
      desc: 'markings on shell',
      exclusive: false
    },
  ],
  genus_notes: {
    Vertiginidae: ['the parietal wall has two primary lamellae (parietal and angular)'],
    Gastrocopta: ['the parietal wall has two primary lamellae (parietal and angular) which are joined'],
    Strobilopsidae: ['visible lamellae include a large parietal lamella and a smaller and recessed infraparietal lamella. Other lamellae are internal and not visible through the aperture of the shell. On the inner surface of the body whorl are a variable number of basal lamellae. The number, size, and position of these lamellae are used to distinguish species.']
  },
  shell_shapes: [
    {
      name: 'Globose Heliciform',
      formDesc: ''
    },{
      name: 'Subglobose Heliciform',
      formDesc: ''
    },{
      name: 'Depressed Heliciform',
      formDesc: ''
    },{
      name: 'Strongly Depressed Heliciform',
      formDesc: ''
    },{
      name: 'Beehive',
      formDesc: 'Also called Conic-heliciform'
    },{
      name: 'Discoidal',
      formDesc: ''
    },{
      name: 'Pupa',
      formDesc: 'rounded on bottom, while fusiform is tapered at bottom'
    },{
      name: 'Succiniform',
      formDesc: ''
    },{
      name: 'Conical',
      formDesc: ''
    },{
      name: 'Fusiform',
      formDesc: 'fusiform means tapered at both ends, don\'t confuse with pupilliform'
    },{
      name: 'Bulimoid',
      formDesc: 'a rounder fusiform'
    },{
      name: "Urocoptiform",
      formDesc: ''
    },{
      name: "Decollated",
      formDesc: ''
    }
  ],
  whorls: {
    rapid: {
      name: 'Rapid',
      img: 'whorls-rapid-increase.svg'
    },
    regular: {
      name: 'Regular',
      img: 'whorls-regular-increase.svg'
    },
    slow: {
      name: 'Slow',
      img: 'whorls-slow-increase.svg'
    }
  },
  sizes: [
    {
      name: 'Micro',
      val: 'micro',
      low: 0,
      high: 1.9
    },
    {
      name: 'Minute',
      val: 'minute',
      low: 2,
      high: 4.9
    },
    {
      name: 'Small',
      val: 'small',
      low: 5,
      high: 9.9
    },
    {
      name: 'Medium',
      val: 'medium',
      low: 10,
      high: 19.9
    },
    {
      name: 'Large',
      val: 'large',
      low: 20,
      high: 100
    }

  ]
}
