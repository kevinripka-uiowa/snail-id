export default {
  valloniidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell globose',
        s: 'Zoogenetes harpa'
      },
      c2:  {
        n: '1b',
        l: 'Shell strongly depressed',
        next: 't2'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell relatively thin, brownish; aperture lip thin, sharp and not reflected',
        s: 'Planogyra asteriscus'
      },
      c2:  {
        n: '2b',
        l: 'Shell relatively thick, whitish to light tan; aperture lip thckened and reflected',
        g: 'Genus Vallonia',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell smooth, with only faint growth lines',
        s: 'Vallonia pulchella'
      },
      c2:  {
        n: '3b',
        l: 'Shell ribbed',
        next: 't4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Aperture lip reflected and distinctly or strongly thickened',
        next: 't5'
      },
      c2:  {
        n: '4b',
        l: 'Aperture lip reflected by thin',
        next: 't7'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Shell small, diameter 2mm or less',
        s: 'Vallonia parvula'
      },
      c2:  {
        n: '5b',
        l: 'Shell large, diameter 2.5mm or more',
        next: 't6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: '20-35 ribs on the last whorl',
        s: 'Vallonia costata'
      },
      c2:  {
        n: '6b',
        l: '45-60 ribs on the last whorl',
        s: 'Vallonia gracilicosta'
      }
    },
    t7: {
      prev: 't4',
      c1: {
        n: '7a',
        l: 'Shell small, diameter 2mm or less',
        s: 'Vallonia perspectiva'
      },
      c2:  {
        n: '7b',
        l: 'Shell larger, diameter 2.5mm or more',
        s: 'Vallonia cyclophorella'
      }
    },


  }
}
