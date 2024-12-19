// Dru Delarosa 
// @dntstck
// Interactive table of elements, v1



//const hydrogen = document.getElementById('ele-hydrogen');
//const helium = document.getElementById('ele-helium');

/*  this is a good start, but it will become very repetitive.

    i think it would be better to list the symbols and the elements in seperate arrays.

*/

/* 
function eleHydrogen(){
    document.getElementById('ele-hydrogen').innerHTML = "" + listElements[0];
}

function revHydrogen(){
    document.getElementById('ele-hydrogen').innerHTML = "" + listSymbols[0];
}

function eleHelium(){
    document.getElementById('ele-helium').innerHTML = "" + listElements[1];
}

function revHelium(){
    document.getElementById('ele-helium').innerHTML = "" + listSymbols[1];
} 
    this is DRY. i think there is a better way to write this.  */ 


const listSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W",
    "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", 
    "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs",
    "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og" ];

const listElements = [ "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine",
    "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese",  "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium",
    "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium",
    "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony",
    "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium",
    "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium",
    "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", 
    "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium",
    "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", 
    "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium",
    "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson", 
];

const elementObj = {
    hydrogen: document.getElementById('ele-hydrogen'),
    helium: document.getElementById('ele-helium'),
    // elements here
};

function updateElement(elementId, content){
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = content;
    }
}

function showElement(index){
    updateElement(Object.keys(elementObj)[index], listElements[index]);
}


function showSymbol(index){
    updateElement(Object.keys(elementObj)[index], listSymbols[index]);
}

// use showElement(0) in mouseover to show the element
// use showSymbol(0) in mouseleave to return the element back to the symbol.
// change the index ie 0, to the respective index ie 1 to show a different element such as Helium.

