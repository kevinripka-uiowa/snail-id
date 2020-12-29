export default {
  endodontidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell large, 9mm or more in diameter',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell small, 8mm or less in diameter',
        next: 't5'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell periphery acutely carinate',
        s: "Anguispira cumberlandiana"
      },
      c2:  {
        n: '1b',
        l: 'Shell periphery rounded or angular, but not carinate',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell marked with darker reddish-brown bands',
        s: "Anguispira kochi"
      },
      c2:  {
        n: '3b',
        l: 'Shell marked with drker reddish-brown blotches',
        next: 't4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Shell 15mm or more in diameter',
        s: "Anguispira alternata"
      },
      c2:  {
        n: '4b',
        l: 'Shell 10mm or less in diameter',
        s: 'Anguispira clarki'
      }
    },
    t5: {
      prev: 't1',
      c1: {
        n: '5a',
        l: 'Shell usually medium to small (2mm-8mm), but when minute (less than 2mm) the shell surface is smooth and witout sculpturing of major and minor riblets',
        next: 't6'
      },
      c2:  {
        n: '5b',
        l: 'Shell minute (less than 2mm), surface sculptured with major and minor riblets',
        g: 'Punctum',
        next: 't19'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell distinctly ribbed, not lirate',
        g: 'Discus',
        next: 't7'
      },
      c2:  {
        n: '6b',
        l: 'Shell lirate, smooth, or with faint growth lines, but not ribbed',
        g: 'Helicodiscus',
        next: 't14'
      }
    },
    t7: {
      prev: 't6',
      c1: {
        n: '7a',
        l: 'Periphery of last whorl rounded',
        next: 't8'
      },
      c2:  {
        n: '7b',
        l: 'Periphery of last whorl either angular, flattened, or concave with single or double carinae',
        next: 't11'
      }
    },
    t8: {
      prev: 't7',
      c1: {
        n: '8a',
        l: 'Shell with darker brown or reddish-brown spots',
        s: 'Discus rotundatus'
      },
      c2:  {
        n: '8b',
        l: 'Shell uniform in color; without darker spots',
        next: 't9'
      }
    },
    t9: {
      prev: 't8',
      c1: {
        n: '9a',
        l: 'Shell with relatively large, coarse ribs (3-4 ribs per mm on body whorl)',
        s: 'Discus patulus'
      },
      c2:  {
        n: '9b',
        l: 'Shell with relatively small, fine ribs (6-8 per mm on body whorl)',
        g: 'Punctum',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell tightly coiled (adults 6-8mm in diameter have 5-6 whorls); ribs indistinct on base of shell',
        s: 'Discus macclintocki'
      },
      c2:  {
        n: '10b',
        l: 'Shell rather loosely coied (adults 5-7mm have 4-4.5 whorls); ribs distinct on base of shell',
        s: 'Discus cronkhitei'
      }
    },
    t11: {
      prev: 't7',
      c1: {
        n: '11a',
        l: 'Periphery of last whorl angular or subangular',
        next: 't12'
      },
      c2:  {
        n: '11b',
        l: 'Periphery of last whorl flattened or concave, singly or doubly carinate',
        next: 't13'
      }
    },
    t12: {
      prev: 't11',
      c1: {
        n: '12a',
        l: 'Shell with darker born or reddish-brown spots',
        s: 'Discus rotundatus'
      },
      c2:  {
        n: '12b',
        l: 'Shell uniform in color; without darker spots',
        s: 'Discus catskillensis'
      }
    },
    t13: {
      prev: 't11',
      c1: {
        n: '13a',
        l: 'Shell doubly carinate; periphery of last whorl deeply concave',
        s: 'Discus clappi'
      },
      c2:  {
        n: '13b',
        l: 'Shell singly carinate; periperhy of last whorl flattened or only slightly concave',
        s: 'Discus bryantii'
      }
    },
    t14: {
      prev: 't6',
      c1: {
        n: '14a',
        l: 'Shell surface sculptured with well-developed spiral lirae',
        next: 't15'
      },
      c2:  {
        n: '14b',
        l: 'Shell surface either smooth or with microscopic striae or puncta',
        next: 't17'
      }
    },
    t15: {
      prev: 't4',
      c1: {
        n: '15a',
        l: 'Spiral lirae unequal in size, some conspicuously fringed',
        s: 'Helicodiscus fimbriatus'
      },
      c2:  {
        n: '15b',
        l: 'Spiral lirae equal in size, not fringed',
        next: 't16'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'Spiral lirae well-developed on all whorls',
        s: 'Helicodiscus eigenmanni'
      },
      c2:  {
        n: '16b',
        l: 'Spiral lirae absent or very poorly developed on the first one or two whorls',
        s: 'Helicodiscus parallelus'
      }
    },
    t17: {
      prev: 't14',
      c1: {
        n: '17a',
        l: 'Shell surface with spiral puncta',
        s: 'Helicodiscus punctatellus'
      },
      c2:  {
        n: '17b',
        l: 'Shell surface smooth, mocroscopically striate, or if punctate the puncta are not spirally arranged',
        next: 't18'
      }
    },
    t18: {
      prev: 't17',
      c1: {
        n: '18a',
        l: 'Shells with 3.5-4 whorls measure 2-3mm in diameter',
        s: 'Helicodiscus singleyanus'
      },
      c2:  {
        n: '18b',
        l: 'Shells with 3.5-4 whorls are less than 2mm in diameter',
        s: 'Helicodiscus nummus'
      }
    },
    t19: {
      prev: 't5',
      c1: {
        n: '19a',
        l: 'Shell aperture without teeth',
        next: 't20'
      },
      c2:  {
        n: '19b',
        l: 'Shell aperture with a basal lamina (tooth)',
        s: 'Punctum smithi'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Shell with major riblets low and relatively closely spaced (on the body whrol there are usually less than 5 minor riblets between each two major riblets)',
        next: 't21'
      },
      c2:  {
        n: '20b',
        l: 'Shell with major riblets widely spaced and more prominent (on the body whorl there are usually more than 5 minor riblets between each two major riblets)',
        s: 'Punctum vitreum'
      }
    },
    t21: {
      prev: 't20',
      c1: {
        n: '21a',
        l: 'Shell relatively large, 1.5mm or more in diameter',
        s: 'Punctum californicum'
      },
      c2:  {
        n: '21b',
        l: 'Shell somewhat depressed; last whorl deflected',
        s: 'Punctum minutissimum'
      }
    }

  }
}
