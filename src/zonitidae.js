export default {
  zonitidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell with few (3 or less) rapidly enlarging whorls, usually imperforate, very thin. The aperture is unusually large, larger than the rest of the shell when seen in the side view',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell with 3 or more whorls which increase slowly in size; thicker. The aperture is smaller than the rest of the shell when seen in side view',
        next: 't4'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell small, diameter 6mm or less; colorless or with pale greenish tint',
        s: 'Vitrina limpida'
      },
      c2:  {
        n: '2b',
        l: 'Shell large, diameter 16mm or more; dark olive-green or dresden-brown.',
        g: 'Subfamily Zonitinae (in part). Genus Vitrinizonites',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell extremely thin and fragile, almost completely devoid of calcareous material',
        s: 'Vitrinizonites uvidermis'
      },
      c2:  {
        n: '3b',
        l: 'Shell thicker, with enough calcium carbonate to prevent wrinkles or distortions in its shape',
        s: 'Vitrinizonites latissimus'
      }
    },
    t4: {
      prev: 't1',
      c1: {
        n: '4a',
        l: 'Shell rather widely to very widely umbilicate; aperture and/or body whorl containing teeth',
        next: 't5'
      },
      c2:  {
        n: '4b',
        l: 'Shell usually perforate to narrowly umbilicate; aperture and body whorl with or without teeth (those few species having a wide umbilicus lack teeth in the apeture and body whorl)',
        next: 't8'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Shell aperture with a parietal tooth in addition to other teeth',
        s: 'Pilsbryna tridens'
      },
      c2:  {
        n: '5b',
        l: 'Shell aperture without a parietal tooth',
        next: 't6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell minute, 1.5mm in diameter; 4 whorls; aperture as wide as high',
        s: 'Paravitrea roundyi'
      },
      c2:  {
        n: '6b',
        l: 'Shell larger, 2-3.5mm; 5 whorls; aperture narrow or deeply crescentic',
        g: 'Genus Clappiella',
        next: 't7'
      }
    },
    t7: {
      prev: 't6',
      c1: {
        n: '7a',
        l: 'Shell disk-shaped, spire almost flat; sculptured with regular spiral rows of beads or papillae',
        s: 'Clapiella saludensis'
      },
      c2:  {
        n: '7b',
        l: 'Shell depressed, almost disk-shaped, spire slightly raised above the body whorl; without sculpture of spiral rows of beads or papillae',
        s: 'Clapiella aldrichiana'
      }
    },
    t8: {
      prev: 't4',
      c1: {
        n: '8a',
        l: 'Shell sculptured with ribs or riblets',
        next: 't9'
      },
      c2:  {
        n: '8b',
        l: 'Shell without ribs or riblets',
        next: 't13'
      }
    },
    t9: {
      prev: 't8',
      c1: {
        n: '9a',
        l: 'Shell relatively large, more than 6mm in diameter; upper surface sculptured with ribs, base smooth; spiral striae absent',
        s: 'Gastrodonta interna'
      },
      c2:  {
        n: '9b',
        l: 'Shell small (less than 3.5mm in diameter), often minute; upper and lower surfaces sculptured with riblets and fine spiral striae',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell relatively large, 2.5mm or more in diameter; umbilicus relatively narrow, 1/5 or less the diameter of the shell; riblets not distinct',
        s: 'Striatura ferrea'
      },
      c2:  {
        n: '10b',
        l: 'Shell smaller, less than 2.5mm in diameter; umbilicus wider, 1/4 or more the diameter of the shell; riblets distinct',
        next: 't11'
      }
    },
    t11: {
      prev: 't10',
      c1: {
        n: '11a',
        l: 'Shell more than 2mm in diameter; riblets high and widely spaced (30-40 on last whorl)',
        s: 'Striatura exigua'
      },
      c2:  {
        n: '11b',
        l: 'Shell less than 2mm in diameter; riblets low and closely spaced (many more than 40 on the last whorl)',
        next: 't12'
      }
    },
    t12: {
      prev: 't11',
      c1: {
        n: '12a',
        l: 'Shell 1.7-1.8mm in diameter; spiral striae prominent',
        s: 'Striatura meridionalis'
      },
      c2:  {
        n: '12b',
        l: 'Shell smaller, about 1.5mm in diameter; spiral striae not prominent',
        s: 'Striatura milium'
      }
    },
    t13: {
      prev: 't8',
      c1: {
        n: '13a',
        l: 'Whorls increasing regularly in size, the last very much wider; without teeth in aperture or body whorl.',
        next: 't14'
      },
      c2:  {
        n: '13b',
        l: 'Whorls narrow, tightly coiled, increasing very slowly in size; with or without teeth in aperture and/or body whorl',
        next: 't54'
      }
    },
    t14: {
      prev: 't13',
      c1: {
        n: '14a',
        l: 'Shell large, 16mm or more in diameter.',
        g: 'Genus Mesomphix',
        next: 't15'
      },
      c2:  {
        n: '14b',
        l: 'Shell smaller, usually 15mm or less in diameter',
        next: 't26'
      }
    },
    t15: {
      prev: 't14',
      c1: {
        n: '15a',
        l: 'Shell perforate, or very narrowly umbilicate, umblicus less than 1/12 the shell diameter',
        next: 't16'
      },
      c2:  {
        n: '15b',
        l: 'Shell umbilics wider, 1/12 to 1/5 the shell diameter',
        next: 't22'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'First several whorls of spire nearly smooth',
        next: 't17'
      },
      c2:  {
        n: '16b',
        l: 'First several whorls of spire strongly sculptured with growth wrinkles',
        next: 't18'
      }
    },
    t17: {
      prev: 't16',
      c1: {
        n: '17a',
        l: 'Last whorl rapidly enlarging, making the aperture relatively large and the spire relatively small; spire diameter 1/2 or less shell diameter',
        s: 'Mesomphix andrewsae'
      },
      c2:  {
        n: '17b',
        l: 'Last whorl smaller, with smaller aperture; spire relatively larger, its diameter more than 1/2 the shell diameter',
        s: 'Mesomphix inornatus'
      }
    },
    t18: {
      prev: 't16',
      c1: {
        n: '18a',
        l: 'Shell height more than 1/2 its diameter',
        next: 't19'
      },
      c2:  {
        n: '18b',
        l: 'Shell height 1/2 or less of its diameter',
        next: 't21'
      }
    },
    t19: {
      prev: 't18',
      c1: {
        n: '19a',
        l: 'Aperture height and width about equal',
        s: 'Mesomphix rugeli'
      },
      c2:  {
        n: '19b',
        l: 'Aperture width distinctly greater than height',
        next: 't20'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Shell rather dull; sculpture of fine spiral papillae well developed',
        s: 'Mesomphix vulgatus'
      },
      c2:  {
        n: '20b',
        l: 'Shell more glossy; sculpture of fine spiral papillae not well developed',
        s: 'Mesomphix perlaevis'
      }
    },
    t21: {
      prev: 't18',
      c1: {
        n: '21a',
        l: 'Last whorl rapidly enlarging, making the spire relatively small, hardly more than 1/2 the shell diameter; sculptured with rows of microscopic spiral papillae',
        s: 'Mesomphix latior'
      },
      c2:  {
        n: '21b',
        l: 'Last whorl smaller, making the spire relatively large, distinctly more than 1/2 the shell diameter; surface without spiral rows of fine papillae',
        s: 'Mesomphix subplanus'
      }
    },
    t22: {
      prev: 't15',
      c1: {
        n: '22a',
        l: 'Shell relatively small, 16.5mm or less in diameter; strongly depressed, spire hardly visible above body whorl' ,
        s: 'Oxychilus draparnaldi'
      },
      c2:  {
        n: '22b',
        l: 'Shell large, more tha 16.5mm in diameter; less strongly depressed',
        next: 't23'
      }
    },
    t23: {
      prev: 't22',
      c1: {
        n: '23a',
        l: 'Shell sculptured with distinct spiral roes of papillae',
        next: 't24'
      },
      c2:  {
        n: '23b',
        l: 'Shell scuplture indistinct',
        next: 't25'
      }
    },
    t24: {
      prev: 't23',
      c1: {
        n: '24a',
        l: 'Shell larger, more than 29mm in diameter; spiral papillae not very well developed',
        s: 'Mesomphix capnodes'
      },
      c2:  {
        n: '24b',
        l: 'Shell smaller, 27mm or less in diameter; spiral papillae well developed',
        s: 'Mesomphix pilsbryi'
      }
    },
    t25: {
      prev: 't23',
      c1: {
        n: '25a',
        l: 'Umblicus 1/6-1/5 the shell diameter',
        s: 'Mesomphix cupreus'
      },
      c2:  {
        n: '25b',
        l: 'Umbilicus about 1/10 the shell diameter',
        s: 'Mesomphix friabilis'
      }
    },
    t26: {
      prev: 't14',
      c1: {
        n: '26a',
        l: 'Shell 6mm or more in diameter; without radiating indented lines',
        g: 'Genus Oxychilus',
        next: 't27'
      },
      c2:  {
        n: '26b',
        l: 'Shell usually less than 6mm in diameter, or if larger, with radiating indented lines',
        next: 't29'
      }
    },
    t27: {
      prev: 't26',
      c1: {
        n: '27a',
        l: 'Shell 6-7mm in diameter; animal very dark',
        s: 'Oxychilus allarius'
      },
      c2:  {
        n: '27b',
        l: 'Shell 9mm or more in diameter; animal either very pale or very dark',
        next: 't28'
      }
    },
    t28: {
      prev: 't27',
      c1: {
        n: '28a',
        l: 'Shell about 9mm in diameter; animal pale gray',
        s: 'Oxychilus cellarius'
      },
      c2:  {
        n: '28b',
        l: 'Shell 12-16.5mm in diameter; animal dark blue-black or blue-gray',
        s: 'Oxychilus draparnaldi'
      }
    },
    t29: {
      prev: 't26',
      c1: {
        n: '29a',
        l: 'Shell with radiating indented lines in addition to its ordinary growth lines or wrinkles',
        next: 't30'
      },
      c2:  {
        n: '29b',
        l: 'Shell without radiating indented lines in addition to its ordinary growth lines or wrinkles',
        next: 't52'
      }
    },
    t30: {
      prev: 't29',
      c1: {
        n: '30a',
        l: 'Shell umbilicate',
        next: 't31'
      },
      c2:  {
        n: '30b',
        l: 'Shell perforate or imperforate',
        next: 't48'
      }
    },
    t31: {
      prev: 't1',
      c1: {
        n: '31a',
        l: 'Radiating indented lines noticably more prominent than growth lines on the upper shell surface and strongly impressed on the base of the shell',
        next: 't32'
      },
      c2:  {
        n: '31b',
        l: 'Radiating indented lines only slightly more prominent than growth lines on the upper shell surface and weakly impressed on the base of the shell',
        next: 't36'
      }
    },
    t32: {
      prev: 't31',
      c1: {
        n: '32a',
        l: 'Shell larger than 5.5mm in dieamter; whitish',
        next: 't33'
      },
      c2:  {
        n: '32b',
        l: 'Shell smaller than 5.5mm in diameter; yellowish or brownish',
        next: 't34'
      }
    },
    t33: {
      prev: 't32',
      c1: {
        n: '33a',
        l: 'Shell 6mm or less in diamter, spire slightly elevated; growth lines widely and irregularly spaced',
        s: 'Paravitrea petrophila'
      },
      c2:  {
        n: '33b',
        l: 'Shell about 8mm in diamter, spire strongly depressed; growth lines closely and regularly spaced',
        s: 'Paravitrea aulacogyra'
      }
    },
    t34: {
      prev: 't32',
      c1: {
        n: '34a',
        l: 'Shell less than 4mm in diameter',
        s: 'Pilsbryana castanea'
      },
      c2:  {
        n: '34b',
        l: 'Shell 4.5mm or more in diameter',
        next: 't35'
      }
    },
    t35: {
      prev: 't34',
      c1: {
        n: '35a',
        l: 'Umbilicus wider, more than 1/4 the shell diameter',
        s: 'Retinella pentadelphia'
      },
      c2:  {
        n: '35b',
        l: 'Umbilicus narrower, less than 1/5 the shell diameter',
        s: 'Retinella rhoadsi'
      }
    },
    t36: {
      prev: 't31',
      c1: {
        n: '36a',
        l: 'Shell light horn to buff-colorred; radiating indented lines widely and irregularly spaced',
        next: 't37'
      },
      c2:  {
        n: '36b',
        l: 'Shell whitish; radiating indented lines closely and regularly spaced',
        next: 't45'
      }
    },
    t37: {
      prev: 't36',
      c1: {
        n: '37a',
        l: 'Umbilicus nearly circular in outline',
        next: 't38'
      },
      c2:  {
        n: '37b',
        l: 'Umbilicus oval in outline',
        next: 't41'
      }
    },
    t38: {
      prev: 't37',
      c1: {
        n: '38a',
        l: 'Shell with raised spire',
        s: 'Retinella circumstriata'
      },
      c2:  {
        n: '38b',
        l: 'Shell strongly depressed',
        next: 't39'
      }
    },
    t39: {
      prev: 't38',
      c1: {
        n: '39a',
        l: 'Shell more than 4mm in diameter',
        s: 'Retinella virgnica'
      },
      c2:  {
        n: '39b',
        l: 'Shell 4mm or less in diameter',
        next: 't40'
      }
    },
    t40: {
      prev: 't39',
      c1: {
        n: '40a',
        l: 'Shell 3.9-4mm in diameter',
        s: 'Retinella burringtoni'
      },
      c2:  {
        n: '40b',
        l: 'Shell 3mm or less in diameter',
        s: 'Retinella cumberlandia'
      }
    },
    t41: {
      prev: 't37',
      c1: {
        n: '41a',
        l: 'Umbilicus wide, 1/5 or 1/6 the shell diameter; shell color yellowish, reddis, or brownish',
        next: 't42'
      },
      c2:  {
        n: '41b',
        l: 'Umbilicus narrower, less than 1/8 the shell diameter; shell color greenish-horm',
        s: 'Retinella approxima'
      }
    },
    t42: {
      prev: 't41',
      c1: {
        n: '42a',
        l: 'Shell 3.6-3.7mm in diameter',
        s: 'Pilsbyna castanea'
      },
      c2:  {
        n: '42b',
        l: 'Shell more than 4mm',
        next: 't43'
      }
    },
    t43: {
      prev: 't42',
      c1: {
        n: '43a',
        l: 'Shell about 4.5mm in diameter',
        s: 'Retinella anattai'
      },
      c2:  {
        n: '43b',
        l: 'Shell 5mm or more in diameter',
        next: 't44'
      }
    },
    t44: {
      prev: 't43',
      c1: {
        n: '44a',
        l: 'Shell 5-5.5mm in diameter; color brownish-horn',
        s: 'Retinella wheatleyi'
      },
      c2:  {
        n: '44b',
        l: 'Shell about 6.5mm in diameter; yellowish to reddish',
        s: 'Retinella clingmani'
      }
    },
    t45: {
      prev: 't36',
      c1: {
        n: '45a',
        l: 'Umbilicus 1/4 the shell diameter; umbilicus walls steeply rounded',
        next: 't46'
      },
      c2:  {
        n: '45b',
        l: 'Umbilicus 1/3 shell diameter; umbilicus walls flattened and slanting',
        s: 'Retinella raderi'
      }
    },
    t46: {
      prev: 't45',
      c1: {
        n: '46a',
        l: 'Shell about 3.5mm in diameter',
        s: 'Retinella lewisiana'
      },
      c2:  {
        n: '46b',
        l: 'Shell larger, 4mm or more in diameter',
        next: 't47'
      }
    },
    t47: {
      prev: 't46',
      c1: {
        n: '47a',
        l: 'Spire and body whorl relatively high',
        s: 'Retinella floridana'
      },
      c2:  {
        n: '47b',
        l: 'Spire and body whorl depressed and low',
        s: 'Retinella roemeri'
      }
    },
    t48: {
      prev: 't30',
      c1: {
        n: '48a',
        l: 'Shell imperforate',
        s: 'Retinella cryptomphala'
      },
      c2:  {
        n: '48b',
        l: 'Shell perforate',
        next: 't49'
      }
    },
    t49: {
      prev: 't48',
      c1: {
        n: '49a',
        l: 'Radiating indented lines closely spaced, about 0.5mm apart at periphery of body whorl',
        s: 'Retinella sculptilis'
      },
      c2:  {
        n: '49b',
        l: 'Radiating indented lines more widely spaxed, about 0.7-1mm apart at periphery of body whorl',
        next: 't50'
      }
    },
    t50: {
      prev: 't49',
      c1: {
        n: '50a',
        l: 'Need to dissect - Penial retractor muscle terminal ',
        next: 't51'
      },
      c2:  {
        n: '50b',
        l: 'Need to dissect - An apical penial flagellum extends past the insertion of the penial retractor muscle',
        s: 'Retinella praecox'
      }
    },
    t51: {
      prev: 't50',
      c1: {
        n: '51a',
        l: 'Need to dissect - The epiphalls opens near th base of the apical penial chamber',
        s: 'Retinella indentata'
      },
      c2:  {
        n: '51b',
        l: 'Need to dissect - The epiphalls opens near the middle of the apical penial chamber',
        s: 'Retinella carolinensis'
      }
    },
    t52: {
      prev: 't29',
      c1: {
        n: '52a',
        l: 'Shell 4.6-5.2mm in diameter',
        s: 'Retinella electrina'
      },
      c2:  {
        n: '52b',
        l: 'Shell 4.3mm or less in diameter',
        next: 't53'
      }
    },
    t53: {
      prev: 't52',
      c1: {
        n: '53a',
        l: 'Shell 3.5-4.3mm in diameter; nearly colorless',
        s: 'Retinella binneyana'
      },
      c2:  {
        n: '53b',
        l: 'Shell 2.6-3.2mm in diameter; pale straw-colored',
        s: 'Retinella dalliana'
      }
    },
    t54: {
      prev: 't13',
      c1: {
        n: '54a',
        l: 'Shell small, less than 4mm in diameter',
        next: 't55'
      },
      c2:  {
        n: '54b',
        l: 'Shell larger, more than 4mm in diameter',
        next: 't70'
      }
    },
    t55: {
      prev: 't54',
      c1: {
        n: '55a',
        l: 'Shell with consipuously raised spire, often beehive',
        g: 'Econuilinae',
        next: 't56'
      },
      c2:  {
        n: '55b',
        l: 'Shell depressed, usually strongly so',
        next: 't60'
      }
    },
    t56: {
      prev: 't55',
      c1: {
        n: '56a',
        l: 'Shell high-spired, usually beehive; surface with close, fine, regularly spaced transverse lines',
        g: 'Genus Euconulus',
        next: 't57'
      },
      c2:  {
        n: '56b',
        l: 'Shell with lower spire, moderateluy depressed; surface without close, fine, regularly spaced transverse lines',
        g: 'Genus Guppya',
        next: 't58'
      }
    },
    t57: {
      prev: 't56',
      c1: {
        n: '57a',
        l: 'Shell with 4.5-6 whorls',
        s: 'Euconulus fulvus'
      },
      c2:  {
        n: '57b',
        l: 'Shell with 6-8 whorls',
        s: 'Euconulus chersinus'
      }
    },
    t58: {
      prev: 't56',
      c1: {
        n: '58a',
        l: 'Shell 2mm or more in diameter',
        next: 't59'
      },
      c2:  {
        n: '58b',
        l: 'Shell less than 1.5mm in diameter',
        s: 'Guppya sterkii'
      }
    },
    t59: {
      prev: 't58',
      c1: {
        n: '59a',
        l: 'Shell surface smooth',
        s: 'Guppya miamiensis'
      },
      c2:  {
        n: '59b',
        l: 'Shell surface spirally striate',
        s: 'Guppya gundlachi'
      }
    },
    t60: {
      prev: 't55',
      c1: {
        n: '60a',
        l: 'Shell very tightly coiled, usually with 6 or more flattened or shouldered whorls; last whorl usually containing teeth',
        next: 't61'
      },
      c2:  {
        n: '60b',
        l: 'Shell less tightly coiled, usually with less than 6 rounded whorls; last whorl usually without teeth',
        next: 't66'
      }
    },
    t61: {
      prev: 't60',
      c1: {
        n: '61a',
        l: 'Umbilicus wide, 1/3 or more the shell diameter',
        s: 'Paravitrea roundyi'
      },
      c2:  {
        n: '61b',
        l: 'Umbilicus narrow, 1/5 or less the shell diameter',
        next: 't62'
      }
    },
    t62: {
      prev: 't61',
      c1: {
        n: '62a',
        l: 'Shell sculptured with regularly spaced transverse lines or grooves',
        next: 't63'
      },
      c2:  {
        n: '62b',
        l: 'Shell scupltured with irregularly space3d transverse lines or grooves',
        s: 'Paravitrea reesei'
      }
    },
    t63: {
      prev: 't62',
      c1: {
        n: '63a',
        l: 'Shell with spiral striae',
        next: 't64'
      },
      c2:  {
        n: '63b',
        l: 'Shell without spiral striae',
        next: 't65'
      }
    },
    t64: {
      prev: 't63',
      c1: {
        n: '64a',
        l: 'Umbilicus smaller, about 1/6 or less the shell diameter',
        s: 'Paravitrea walkeri'
      },
      c2:  {
        n: '64b',
        l: 'Umbilicus larger, about 1/5 or more the shell diameter',
        s: 'Paravitrea variabilis'
      }
    },
    t65: {
      prev: 't63',
      c1: {
        n: '65a',
        l: 'Shell 3mm or less in diameter; umbilicus 1/7 or more the shell diameter',
        s: 'Paravitrea multidentata'
      },
      c2:  {
        n: '65b',
        l: 'Shell 3.5mm or more in diameter; umbilicus 1/10 or less the shell diameter',
        s: 'Paravitrea lamellidens'
      }
    },
    t66: {
      prev: 't60',
      c1: {
        n: '66a',
        l: 'Shell white, opaque',
        s: 'Hawaiia miniscula'
      },
      c2:  {
        n: '66b',
        l: 'Shell corneous, translucent',
        next: 't67'
      }
    },
    t67: {
      prev: 't66',
      c1: {
        n: '67a',
        l: 'Shell widely umblicate, umbilicus about 1/3 the shell diameter',
        s: 'Pilsbryna tridens'
      },
      c2:  {
        n: '67b',
        l: 'Shell more narrowly umbilicate, umbilicus 1/5 or less the shell diameter',
        next: 't68'
      }
    },
    t68: {
      prev: 't67',
      c1: {
        n: '68a',
        l: 'Whorls more rapidly expanding, the last one rather prominent',
        s: 'Pilsbryna castanea'
      },
      c2:  {
        n: '68b',
        l: 'Whorls more gradually expanding',
        next: 't69'
      }
    },
    t69: {
      prev: 't68',
      c1: {
        n: '69a',
        l: 'Umbilicus deep and steep-sided, penultimate whorl not prominent within the umbilicus; 4.5-6 whorls',
        s: 'Pilsbryna aurea'
      },
      c2:  {
        n: '69b',
        l: 'Umbilicus relatively shallow, prominently showing the penultimate whorl; 3/5-4 whorls',
        s: 'Striatura ferrea'
      }
    },
    t70: {
      prev: 't54',
      c1: {
        n: '70a',
        l: 'Aperture not calloused within; shell usually with more than 5 whorls; body whrol often containing one or more transverse lamellae or rows of teeth, which may be seen through the base of the translucent shell',
        next: 't71'
      },
      c2:  {
        n: '70b',
        l: 'Aperture may or may not have an internal callus, bit if a callus is absent the shell has few whorls (4.5 or less); if lamellae or teeth are present within the body whorl they are not trnasversely situated',
        next: 't82'
      }
    },
    t71: {
      prev: 't70',
      c1: {
        n: '71a',
        l: 'Shell sculptured with regularly spaced transverse lines or grooves',
        s: 'Paravitrea clappi'
      },
      c2:  {
        n: '71b',
        l: 'Shell sculptured with irregularly spaced transverse lines or grooves',
        next: 't72'
      }
    },
    t72: {
      prev: 't71',
      c1: {
        n: '72a',
        l: 'Whorls increasing regularly in size, the last very much wider',
        next: 't73'
      },
      c2:  {
        n: '72b',
        l: 'Whorls narrow, tightly, coiled, increasing very slowly in size',
        next: 't74'
      }
    },
    t73: {
      prev: 't72',
      c1: {
        n: '73a',
        l: 'Shell 6mm or less in diameter, spire slightly elevate growth lines widely and irregularly spaced',
        s: 'Paravitrea petrophila'
      },
      c2:  {
        n: '73b',
        l: 'Shell about 8mm in diameter, spire strongly depressed; growth lines closely and rather regularly spaced',
        s: 'Paravitrea aulacogyra'
      }
    },
    t74: {
      prev: 't72',
      c1: {
        n: '74a',
        l: 'Species foudn in areas bordering or west of the Mississippi River',
        next: 't75'
      },
      c2:  {
        n: '74b',
        l: 'Species found east of the Mississippi River',
        next: 't76'
      }
    },
    t75: {
      prev: 't74',
      c1: {
        n: '75a',
        l: 'Periphery of last whorl flattened and sloped outwards',
        s: 'Paravitrea significans'
      },
      c2:  {
        n: '75b',
        l: 'Periphery of last whorl rounded',
        s: 'Paravitrea simpsoni'
      }
    },
    t76: {
      prev: 't74',
      c1: {
        n: '76a',
        l: 'Shell diameter 6.5mm or greater',
        next: 't77'
      },
      c2:  {
        n: '76b',
        l: 'Shell diameter 6.2mm or less',
        next: 't78'
      }
    },
    t77: {
      prev: 't76',
      c1: {
        n: '77a',
        l: 'Shell with 7-7.5 whorls; adults without teeth',
        s: 'Paravitrea placentula'
      },
      c2:  {
        n: '77b',
        l: 'Shell with 8-9 whorls; adults with or without teeth',
        s: 'Paravitrea anewsae'
      }
    },
    t78: {
      prev: 't76',
      c1: {
        n: '78a',
        l: 'Shell 5mm or more in diameter; 6.5-8 whorls',
        next: 't79'
      },
      c2:  {
        n: '78b',
        l: 'Shell 4.7mm o rless in diamter; 4.5-6.5 whorls',
        next: 't80'
      }
    },
    t79: {
      prev: 't78',
      c1: {
        n: '79a',
        l: 'Umbilicus relatively large, 1/4 the shell diameter; adults with teeth in body whorl',
        s: 'Paravitrea pilsbryana'
      },
      c2:  {
        n: '79b',
        l: 'Umbilicus smaller, 1/5 or less the shell diameter; adults with or without teth in body whrol',
        s: 'Paravitrea capsella'
      }
    },
    t80: {
      prev: 't78',
      c1: {
        n: '80a',
        l: 'Adults with teeth in body whorl',
        s: 'Paravitrea reesei'
      },
      c2:  {
        n: '80b',
        l: 'Adults without teeth in body whorl',
        next: 't81'
      }
    },
    t81: {
      prev: 't1',
      c1: {
        n: '81a',
        l: 'Shell with 4.5 whorls',
        s: 'Paravitrea smithi'
      },
      c2:  {
        n: '81b',
        l: 'Shell with 6 whorls',
        s: 'Paravitrea conecuhensis'
      }
    },
    t82: {
      prev: 't70',
      c1: {
        n: '82a',
        l: 'Aperture with a callous pad, lamellae, or teeth; 5 or more whorls',
        g: 'Genus Ventridens',
        next: 't83'
      },
      c2:  {
        n: '82b',
        l: 'Aperture without a callous pad, lamellae or teeth; shell with 5 whorls or less',
        g: 'Genus Zonitoides',
        next: 't97'
      }
    },
    t83: {
      prev: 't82',
      c1: {
        n: '83a',
        l: 'Aperture in adults with a callous pad, but without teeth',
        next: 't84'
      },
      c2:  {
        n: '83b',
        l: 'Aperture in adults with teeth',
        next: 't91'
      }
    },
    t84: {
      prev: 't83',
      c1: {
        n: '84a',
        l: 'Shell perforate or imperforate',
        next: 't85'
      },
      c2:  {
        n: '84b',
        l: 'Shell narrowly umblicate, umbilicus 1/8 or more of shell diameter',
        s: 'Ventridens eliotti'
      }
    },
    t85: {
      prev: 't84',
      c1: {
        n: '85a',
        l: 'Shell periphery rounded or angular',
        next: 't86'
      },
      c2:  {
        n: '85b',
        l: 'Shell periphery sharply carinate',
        s: 'Ventridens intertextus'
      }
    },
    t86: {
      prev: 't85',
      c1: {
        n: '86a',
        l: 'Shell large, generally more than 11mm in diameter',
        next: 't87'
      },
      c2:  {
        n: '86b',
        l: 'Shell smaller, generally less than 11mm in diameter',
        next: 't89'
      }
    },
    t87: {
      prev: 't86',
      c1: {
        n: '87a',
        l: 'Shell with well-devleoped spiral striae; surface dull',
        s: 'Ventridens intertextus'
      },
      c2:  {
        n: '87b',
        l: 'Shell with porrly developed striae; surface glossy',
        next: 't88'
      }
    },
    t88: {
      prev: 't89',
      c1: {
        n: '88a',
        l: 'Shell very glossy; 7-8 whorls',
        s: 'Ventridens acerra'
      },
      c2:  {
        n: '88b',
        l: 'Shell only moderately glossy; 6-7 whorls',
        s: 'Ventridens ligera'
      }
    },
    t89: {
      prev: 't86',
      c1: {
        n: '89a',
        l: 'Shell markedly concave at its base',
        s: 'Ventridens gularis theloides'
      },
      c2:  {
        n: '89b',
        l: 'Shell perforate, but not markedly concave at its base',
        next: 't90'
      }
    },
    t90: {
      prev: 't89',
      c1: {
        n: '90a',
        l: 'Spire elevated',
        s: 'Ventridens percallosus'
      },
      c2:  {
        n: '90b',
        l: 'Spire lower',
        s: 'Ventridens demissus'
      }
    },
    t91: {
      prev: 't83',
      c1: {
        n: '91a',
        l: 'Shell perforate or imperforate',
        next: 't92'
      },
      c2:  {
        n: '91b',
        l: 'Shell narrowly umbilicate, umbilicus 1/9 or more the shell diameter',
        next: 't94'
      }
    },
    t92: {
      prev: 't91',
      c1: {
        n: '92a',
        l: 'Transverse sculpture of upper surface of shell sharp and distinct',
        next: 't93'
      },
      c2:  {
        n: '92b',
        l: 'Transerse sulpture of upper surface of shell waker, raised lines rounded',
        s: 'Ventridens cerinoideus'
      }
    },
    t93: {
      prev: 't92',
      c1: {
        n: '93a',
        l: 'Shell without spiral striae',
        s: 'Ventridens collisella'
      },
      c2:  {
        n: '93b',
        l: 'Shell with rather poorly developed, but distinct spiral striae',
        s: 'Ventridens gularis'
      }
    },
    t94: {
      prev: 't91',
      c1: {
        n: '94a',
        l: 'Umbilicus 1/9 to 1/8 the shell diameter',
        s: 'Ventridens suppressus'
      },
      c2:  {
        n: '94b',
        l: 'Umbilicus 1/7 or more the shell diameter',
        next: 't95'
      }
    },
    t95: {
      prev: 't94',
      c1: {
        n: '95a',
        l: 'Umbilicus 1/7 to 1/6 the shell diameter; shell 6.5-6.7mm in diameter',
        s: 'Ventridens coelaxis'
      },
      c2:  {
        n: '95b',
        l: 'Umbilicus 1/5 or more the shell diameter; shell 7.5mm or more in diameter',
        next: 't96'
      }
    },
    t96: {
      prev: 't95',
      c1: {
        n: '96a',
        l: 'Umbilicus 1/5 the shell diameter; shell 7.8-9mm in diameter',
        s: 'Ventridens lawae'
      },
      c2:  {
        n: '96b',
        l: 'Umbilicus 1/4 to 1/3 the shell diameter; shell 7.5-7.8mm in diameter',
        s: 'Ventridens lasmodon'
      }
    },
    t97: {
      prev: 't82',
      c1: {
        n: '97a',
        l: 'Shell moderatley to widely umbilicate, umbilicus 1/5 or more the shell diameter',
        next: 't98'
      },
      c2:  {
        n: '97b',
        l: 'Shell narrowly umbilicate, umbilicus 1/6 or less the shell diameter',
        s: 'Paravitrea smithi'
      }
    },
    t98: {
      prev: 't97',
      c1: {
        n: '98a',
        l: 'Shell glossy and rather weakly sculptured; moderately umbilicate, umbilicus 1/5 to 1/4 shell diameter',
        next: 't99'
      },
      c2:  {
        n: '98b',
        l: 'Shell dull, with distinct, rather coarse sculpture; rather widely umbiicate, umbilicus 1/4 or mre the shell diameter',
        next: 't100'
      }
    },
    t99: {
      prev: 't98',
      c1: {
        n: '99a',
        l: 'Shell larger, more than 6mm in diameter, without faint spiral striae',
        s: 'Zonitoides nitidus'
      },
      c2:  {
        n: '99b',
        l: 'Shell smaller, 6mm or less in diameter, usually with faint spiral straie',
        s: 'Zonitoides arboreus'
      }
    },
    t100: {
      prev: 't98',
      c1: {
        n: '100a',
        l: 'Shell 5mm or more in diameter; upper lip margin flattened and deflected',
        s: 'Zonitoides patuloides'
      },
      c2:  {
        n: '100b',
        l: 'Shell 5mm or less in diameter; upper lip margin rounded and not reflected',
        next: 't101'
      }
    },
    t101: {
      prev: 't1',
      c1: {
        n: '101a',
        l: 'Shell depressed and greatly flattened; umbilicus more than 1/3 shell diameter',
        s: 'Zonitoides lateumbilicatus'
      },
      c2:  {
        n: '101b',
        l: 'Shell depressed but not especially flattened; umbilicus 1/4 to 1/3 shell diameter',
        s: 'Zonitoides limatulus'
      }
    },



  }
}
