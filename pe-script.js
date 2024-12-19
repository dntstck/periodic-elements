// Dru Delarosa
// @dntstck
// interactive table of periodic elements v2

const listSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W",
    "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", 
    "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs",
    "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];

const listElements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine",
    "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium",
    "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium",
    "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony",
    "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium",
    "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium",
    "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", 
    "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium",
    "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", 
    "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium",
    "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"];

const listAtomicNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", 
    "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", 
    "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", 
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67",
    "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84",
    "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", 
    "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114",
    "115", "116", "117", "118",
];

const listEleDesc = ["Lightest element, essential for water and life.", "Inert gas, used in balloons and coolants.",
    "Used in batteries, light metal.", "Hard, gray metal used in aerospace.", "Metalloids used in glass and detergents.", 
    "Basis of organic life, forms diamonds and graphite.", "Major part of Earth's atmosphere.", 
    "Essential for respiration, part of water.", "Highly reactive, used in toothpaste.", "Inert gas, used in signs.",
    "Reactive metal, part of table salt.", "Light metal used in alloys and fireworks.", "Lightweight, used in packaging and construction.",
    "Semiconductor, used in electronics.", "Essential for DNA, used in fertilizers.", "Yellow nonmetal, used in vulcanizing rubber.",
    "Disinfectant, used in pools.", "Inert gas, used in light bulbs.", "Essential nutrient, used in fertilizers.", "Essential for bones, used in cement.", 
    "Transition metal, used in aerospace alloys.", "Strong metal, used in aircraft and implants.", "Used in steel alloys.",
    "Used in stainless steel and chrome plating.", "Important in steelmaking.", "Core of the Earth's structure, used in construction.",
    "Used in batteries and magnetic alloys.", "Used in stainless steel and coins.", "Conductive, used in wiring and coins.",
    "Used for galvanizing and in alloys.", "Used in electronics and thermometers.", "Semiconductor, used in electronics.",
    "Used in pesticides and semiconductors.", "Used in photocopiers and glass.", "Used in flame retardants.", "Inert gas, used in lighting.",
    "Used in atomic clocks.", "Used in fireworks and medical imaging.", "Used in LEDs and superconductors.", "Used in nuclear reactors.", "Used in superconductors.",
    "Used in steel alloys.", "Radioactive, used in medical diagnostics.", "Used in electronics and catalysts.", "Used in catalytic converters.",
    "Used in electronics and catalysts.", "Conductive, used in jewelry and electronics.", "Used in batteries and pigments.", 
    "Used in touchscreens and solders.", "Used in soldering and coatings.", "Used in flame retardants.", "Used in solar panels and alloys.",
    "Essential nutrient, used in disinfectants.", "Inert gas, used in lighting and anesthesia.", "Used in atomic clocks and electronics.",
    "Used in medical imaging and fireworks.", "Used in camera lenses and catalysts.", "Used in catalysts and glass polishing.", 
    "Used in magnets and glass.", "Used in powerful magnets.", "Radioactive, used in nuclear batteries.", "Used in magnets and cancer treatment.",
    "Used in phosphorescent and fluorescent applications.", "Used in MRI contrast agents.", "Used in phosphors and magnets.",
    "Used in magnets and nuclear reactors.", "Used in magnets and lasers.", "Used in lasers and optical fibers.",
    "Used in medical X-ray devices.", "Used in lasers and atomic clocks.", "Used in PET scanners and catalysts.",
    "Used in nuclear reactors and electronics.", "Used in electronics and surgical implants.", "Used in light bulb filaments and cutting tools.",
    "Used in jet engines and catalysts.", "Dense metal, used in alloys.", "Used in electronics and spark plugs.", "Used in jewelry and catalysts.",
    "Conductive, used in jewelry and electronics.", "Liquid metal, used in thermometers.", "Used in electronics and glass.",
    "Used in batteries and radiation shielding.", "Used in pharmaceuticals and cosmetics.", "Radioactive, used in anti-static devices.",
    "Rare, used in cancer treatment.", "Radioactive gas, health hazard.", "Highly radioactive, little practical use.",
    "Radioactive, used in cancer treatment.", "Radioactive, used in research.", "Used in nuclear reactors.", "Rare, used in research.",
    "Used in nuclear fuel.", "Used in research.", "Used in nuclear weapons and reactors.", "Used in smoke detectors.", "Used in space missions.",
    "Used in research.", "Used in neutron sources.", "Used in research.", "Used in research.", "Used in research.",
    "Used in research.", "Used in research.", "Used in research.", "Used in research.", "Used in research.", "Used in research.",
    "Used in research.", "Used in research.", "Used in research.", "Used in research.", "Used in research.", "Used in research.",
    "Used in research.", "Used in research.", "Used in research.", "Used in research.", "Used in research.", ];


    const elementObj = {
        hydrogen: document.getElementById('ele-hydrogen'),
        helium: document.getElementById('ele-helium'),
        lithium: document.getElementById('ele-lithium'),
        beryllium: document.getElementById('ele-beryllium'),
        boron: document.getElementById('ele-boron'),
        carbon: document.getElementById('ele-carbon'),
        nitrogen: document.getElementById('ele-nitrogen'),
        oxygen: document.getElementById('ele-oxygen'),
        fluorine: document.getElementById('ele-fluorine'),
        neon: document.getElementById('ele-neon'),
        sodium: document.getElementById('ele-sodium'),
        magnesium: document.getElementById('ele-magnesium'),
        aluminium: document.getElementById('ele-aluminium'),
        silicon: document.getElementById('ele-silicon'),
        phosphorus: document.getElementById('ele-phosphorus'),
        sulfur: document.getElementById('ele-sulfur'),
        chlorine: document.getElementById('ele-chlorine'),
        argon: document.getElementById('ele-argon'),
        potassium: document.getElementById('ele-potassium'),
        calcium: document.getElementById('ele-calcium'),
        scandium: document.getElementById('ele-scandium'),
        titanium: document.getElementById('ele-titanium'),
        vanadium: document.getElementById('ele-vanadium'),
        chromium: document.getElementById('ele-chromium'),
        manganese: document.getElementById('ele-manganese'),
        iron: document.getElementById('ele-iron'),
        cobalt: document.getElementById('ele-cobalt'),
        nickel: document.getElementById('ele-nickel'),
        copper: document.getElementById('ele-copper'),
        zinc: document.getElementById('ele-zinc'),
        gallium: document.getElementById('ele-gallium'),
        germanium: document.getElementById('ele-germanium'),
        arsenic: document.getElementById('ele-arsenic'),
        selenium: document.getElementById('ele-selenium'),
        bromine: document.getElementById('ele-bromine'),
        krypton: document.getElementById('ele-krypton'),
        rubidium: document.getElementById('ele-rubidium'),
        strontium: document.getElementById('ele-strontium'),
        yttrium: document.getElementById('ele-yttrium'),
        zirconium: document.getElementById('ele-zirconium'),
        niobium: document.getElementById('ele-niobium'),
        molybdenum: document.getElementById('ele-molybdenum'),
        technetium: document.getElementById('ele-technetium'),
        ruthenium: document.getElementById('ele-ruthenium'),
        rhodium: document.getElementById('ele-rhodium'),
        palladium: document.getElementById('ele-palladium'),
        silver: document.getElementById('ele-silver'),
        cadmium: document.getElementById('ele-cadmium'),
        indium: document.getElementById('ele-indium'),
        tin: document.getElementById('ele-tin'),
        antimony: document.getElementById('ele-antimony'),
        tellurium: document.getElementById('ele-tellurium'),
        iodine: document.getElementById('ele-iodine'),
        xenon: document.getElementById('ele-xenon'),
        cesium: document.getElementById('ele-cesium'),
        barium: document.getElementById('ele-barium'),
        lanthanum: document.getElementById('ele-lanthanum'),
        cerium: document.getElementById('ele-cerium'),
        praseodymium: document.getElementById('ele-praseodymium'),
        neodymium: document.getElementById('ele-neodymium'),
        promethium: document.getElementById('ele-promethium'),
        samarium: document.getElementById('ele-samarium'),
        europium: document.getElementById('ele-europium'),
        gadolinium: document.getElementById('ele-gadolinium'),
        terbium: document.getElementById('ele-terbium'),
        dysprosium: document.getElementById('ele-dysprosium'),
        holmium: document.getElementById('ele-holmium'),
        erbium: document.getElementById('ele-erbium'),
        thulium: document.getElementById('ele-thulium'),
        ytterbium: document.getElementById('ele-ytterbium'),
        lutetium: document.getElementById('ele-lutetium'),
        hafnium: document.getElementById('ele-hafnium'),
        tantalum: document.getElementById('ele-tantalum'),
        tungsten: document.getElementById('ele-tungsten'),
        rhenium: document.getElementById('ele-rhenium'),
        osmium: document.getElementById('ele-osmium'),
        iridium: document.getElementById('ele-iridium'),
        platinum: document.getElementById('ele-platinum'),
        gold: document.getElementById('ele-gold'),
        mercury: document.getElementById('ele-mercury'),
        thallium: document.getElementById('ele-thallium'),
        lead: document.getElementById('ele-lead'),
        bismuth: document.getElementById('ele-bismuth'),
        polonium: document.getElementById('ele-polonium'),
        astatine: document.getElementById('ele-astatine'),
        radon: document.getElementById('ele-radon'),
        francium: document.getElementById('ele-francium'),
        radium: document.getElementById('ele-radium'),
        actinium: document.getElementById('ele-actinium'),
        thorium: document.getElementById('ele-thorium'),
        protactinium: document.getElementById('ele-protactinium'),
        uranium: document.getElementById('ele-uranium'),
        neptunium: document.getElementById('ele-neptunium'),
        plutonium: document.getElementById('ele-plutonium'),
        americium: document.getElementById('ele-americium'),
        curium: document.getElementById('ele-curium'),
        berkelium: document.getElementById('ele-berkelium'),
        californium: document.getElementById('ele-californium'),
        einsteinium: document.getElementById('ele-einsteinium'),
        fermium: document.getElementById('ele-fermium'),
        mendelevium: document.getElementById('ele-mendelevium'),
        nobelium: document.getElementById('ele-nobelium'),
        lawrencium: document.getElementById('ele-lawrencium'),
        rutherfordium: document.getElementById('ele-rutherfordium'),
        dubnium: document.getElementById('ele-dubnium'),
        seaborgium: document.getElementById('ele-seaborgium'),
        bohrium: document.getElementById('ele-bohrium'),
        hassium: document.getElementById('ele-hassium'),
        meitnerium: document.getElementById('ele-meitnerium'),
        darmstadtium: document.getElementById('ele-darmstadtium'),
        roentgenium: document.getElementById('ele-roentgenium'),
        copernicium: document.getElementById('ele-copernicium'),
        nihonium: document.getElementById('ele-nihonium'),
        flerovium: document.getElementById('ele-flerovium'),
        moscovium: document.getElementById('ele-moscovium'),
        livermorium: document.getElementById('ele-livermorium'),
        tennessine: document.getElementById('ele-tennessine'),
        oganesson: document.getElementById('ele-oganesson'),
    
        // wow that was some typing :)
    };

function updateElement(elementKey, content) {
    const element = elementObj[elementKey];
    if (element) {
        element.innerHTML = content;
    }
}

function showElement(index) {
    const elementKey = Object.keys(elementObj)[index];
    updateElement(elementKey, listElements[index]); 
} // updates the elements on mousein

function showSymbol(index) {
    const elementKey = Object.keys(elementObj)[index];
    updateElement(elementKey, listSymbols[index]); 
} // reverts back to the element symbols on mouseout

function mouseEvent(elementKey, index) {
    const element = elementObj[elementKey];
    if (element) {
        element.addEventListener('mouseover', () => showElement(index));
        element.addEventListener('mouseout', () => showSymbol(index));
        element.addEventListener('click', () => alert(listElements[index] + " (" + listSymbols[index] + ")\nAtomic number: " + listAtomicNum[index] + "\n" + listEleDesc[index]));
    }  // event listeners for mouse actions
}

Object.keys(elementObj).forEach((key, index) => {
    mouseEvent(key, index); // update keys and idx on func mouseEvent
});
