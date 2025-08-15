var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kanal İstanbul Projesindeki İmar Faaliyetleri / Urban Expansion in the Canal Istanbul Project',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.748,41.150],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/tThskcSq/MEF-AAP-027-BAP-PART-II-2025-07-31-23-28-26.png',
            description: '',
            location: {
              center: [28.689,41.240],
                zoom: 13,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Gf8FQ7sT/MEF-AAP-027-BAP-PART-II-2025-08-01-07-34-38.png',
            description: '',
            location: {
              center: [28.689,41.240],
                zoom: 13,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/JRkqKF6X/MEF-AAP-027-BAP-PART-II-2025-08-01-01-17-06.png',
            description: '',
            location: {
                 center: [28.689,41.240],
                zoom: 13,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nNGrcFcj/MEF-AAP-027-BAP-PART-II-2025-07-31-23-49-22.png',
            description: '',
            location: {
                 center: [28.689,41.240],
                zoom: 13,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/SXWPszys/MEF-AAP-027-BAP-PART-II-2025-07-31-23-46-25.png',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 13,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'right',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/kVb63XMx/MEF-AAP-027-BAP-PART-II-2025-07-31-22-52-59.png',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 13,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '8',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/PszFtW5b/MEF-AAP-027-BAP-PART-II-2025-07-31-22-53-34.png',
            description: '',
            location: {
               center: [28.689,41.240],
                zoom: 13,
                pitch: 10,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
               center: [28.689,41.240],
                zoom: 12,
                pitch: 10,
                bearing: 0,
               
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '10',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/M5JmVnD0/MEF-AAP-027-BAP-PART-II-2025-07-31-23-19-40.png',
            description: '',
            location: {
                center: [28.66419,41.24722],
                zoom: 14,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '11',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '12',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
         {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.66514,41.24197],
                zoom: 13,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '14',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/B2vj1PwB/MEF-AAP-027-BAP-PART-II-2025-07-31-23-58-02.png',
            description: '',
            location: {
                center: [28.66514,41.24197],
                zoom: 14,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '15',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '16',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/B2g1j9wq/MEF-AAP-027-BAP-PART-II-2025-07-31-23-55-14.png',
            description: '',
            location: {
                center: [28.64933,41.21689],
                zoom: 13,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '17',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/vxpsz6sj/MEF-AAP-027-BAP-PART-II-2025-08-01-07-35-58.png',
            description: '',
            location: {
                center: [28.64933,41.21689],
                zoom: 16,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: '18',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.689,41.240],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: '19',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/99MZmMyC/MEF-AAP-027-BAP-PART-II-2025-07-31-23-01-52.png',
            description: '',
            location: {
                center: [28.67681,41.32778],
                zoom: 13,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/1GP9f1jZ/MEF-AAP-027-BAP-PART-II-2025-08-01-07-30-02.png',
            description: '',
            location: {
                center: [28.67681,41.32778],
                zoom: 15,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
