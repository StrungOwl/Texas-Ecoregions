// Invasive species data extracted from USFS National Invasive Species dataset
// Source: https://data-usfs.hub.arcgis.com (NFS in Texas National Forest)
// Species mapped to Texas ecoregions based on ecological distribution

const invasiveSpeciesData = [
  { scientific: "Ailanthus altissima", common: "Tree of Heaven", ecoregions: ["crossTimbers", "texasBlacklandPrairies", "eastCentralTexasPlains", "edwardsPlateau"] },
  { scientific: "Albizia julibrissin", common: "Silktree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies"] },
  { scientific: "Arundo donax", common: "Giant Reed", ecoregions: ["chihuahuanDeserts", "edwardsPlateau", "southernTexasPlains", "westernGulfCoastalPlain", "texasBlacklandPrairies"] },
  { scientific: "Bothriochloa ischaemum var. songarica", common: "Yellow Bluestem", ecoregions: ["southwesternTablelands", "highPlains", "centralGreatPlains", "crossTimbers", "edwardsPlateau", "southernTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Broussonetia papyrifera", common: "Paper Mulberry", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"] },
  { scientific: "Carduus nutans", common: "Nodding Plumeless Thistle", ecoregions: ["southwesternTablelands", "highPlains", "centralGreatPlains", "arizonaNewMexicoMountains"] },
  { scientific: "Cortaderia selloana", common: "Pampas Grass", ecoregions: ["westernGulfCoastalPlain", "southernTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Eichhornia crassipes", common: "Common Water Hyacinth", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "southernTexasPlains"] },
  { scientific: "Gleditsia triacanthos", common: "Honeylocust", ecoregions: ["crossTimbers", "texasBlacklandPrairies", "centralGreatPlains", "eastCentralTexasPlains"] },
  { scientific: "Hedera helix", common: "English Ivy", ecoregions: ["southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"] },
  { scientific: "Hydrilla verticillata", common: "Waterthyme", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Imperata cylindrica", common: "Cogongrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains"] },
  { scientific: "Juniperus virginiana", common: "Eastern Redcedar", ecoregions: ["crossTimbers", "centralGreatPlains", "texasBlacklandPrairies", "edwardsPlateau"] },
  { scientific: "Kummerowia striata", common: "Japanese Clover", ecoregions: ["southCentralPlains", "eastCentralTexasPlains", "westernGulfCoastalPlain"] },
  { scientific: "Lespedeza bicolor", common: "Shrub Lespedeza", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Lespedeza cuneata", common: "Sericea Lespedeza", ecoregions: ["southCentralPlains", "crossTimbers", "centralGreatPlains", "eastCentralTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Ligustrum sinense", common: "Chinese Privet", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau"] },
  { scientific: "Lonicera japonica", common: "Japanese Honeysuckle", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau", "centralGreatPlains"] },
  { scientific: "Lygodium japonicum", common: "Japanese Climbing Fern", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains"] },
  { scientific: "Magnolia grandiflora", common: "Southern Magnolia", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains"] },
  { scientific: "Manihot grahamii", common: "Graham's Manihot", ecoregions: ["southernTexasPlains", "westernGulfCoastalPlain"] },
  { scientific: "Melia azedarach", common: "Chinaberrytree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies", "edwardsPlateau", "southernTexasPlains"] },
  { scientific: "Myriophyllum spicatum", common: "Eurasian Watermilfoil", ecoregions: ["westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Nandina domestica", common: "Sacred Bamboo", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "crossTimbers", "texasBlacklandPrairies"] },
  { scientific: "Paspalum dilatatum", common: "Dallisgrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"] },
  { scientific: "Paspalum notatum", common: "Bahiagrass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Paspalum urvillei", common: "Vasey's Grass", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains", "southernTexasPlains"] },
  { scientific: "Paulownia tomentosa", common: "Princesstree", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"] },
  { scientific: "Phragmites australis", common: "Common Reed", ecoregions: ["chihuahuanDeserts", "westernGulfCoastalPlain", "southernTexasPlains", "edwardsPlateau"] },
  { scientific: "Phyllanthus urinaria", common: "Chamber Bitter", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Phyllostachys aurea", common: "Golden Bamboo", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Poncirus trifoliata", common: "Hardy Orange", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Pueraria montana", common: "Kudzu", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"] },
  { scientific: "Robinia pseudoacacia", common: "Black Locust", ecoregions: ["arizonaNewMexicoMountains", "crossTimbers", "centralGreatPlains", "edwardsPlateau"] },
  { scientific: "Rosa bracteata", common: "Macartney Rose", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"] },
  { scientific: "Rosa multiflora", common: "Multiflora Rose", ecoregions: ["crossTimbers", "centralGreatPlains", "texasBlacklandPrairies", "eastCentralTexasPlains"] },
  { scientific: "Salvinia molesta", common: "Giant Salvinia", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Solanum viarum", common: "Tropical Soda Apple", ecoregions: ["westernGulfCoastalPlain", "southCentralPlains"] },
  { scientific: "Sorghum halepense", common: "Johnsongrass", ecoregions: ["chihuahuanDeserts", "southwesternTablelands", "highPlains", "centralGreatPlains", "crossTimbers", "edwardsPlateau", "southernTexasPlains", "texasBlacklandPrairies", "eastCentralTexasPlains", "westernGulfCoastalPlain", "southCentralPlains"] },
  { scientific: "Tamarix ramosissima", common: "Saltcedar", ecoregions: ["chihuahuanDeserts", "southwesternTablelands", "highPlains", "southernTexasPlains", "edwardsPlateau", "arizonaNewMexicoMountains"] },
  { scientific: "Triadica sebifera", common: "Chinese Tallow", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies", "southernTexasPlains"] },
  { scientific: "Vernicia fordii", common: "Tungoil Tree", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain"] },
  { scientific: "Vicia minutiflora", common: "Pygmyflower Vetch", ecoregions: ["southCentralPlains", "eastCentralTexasPlains"] },
  { scientific: "Vinca major", common: "Bigleaf Periwinkle", ecoregions: ["eastCentralTexasPlains", "texasBlacklandPrairies", "crossTimbers"] },
  { scientific: "Wisteria sinensis", common: "Chinese Wisteria", ecoregions: ["southCentralPlains", "westernGulfCoastalPlain", "eastCentralTexasPlains", "texasBlacklandPrairies"] }
];

// Spanish translations for common names
const spanishCommonNames = {
  "Ailanthus altissima": "Árbol del Cielo",
  "Albizia julibrissin": "Árbol de Seda",
  "Arundo donax": "Caña Gigante",
  "Bothriochloa ischaemum var. songarica": "Pasto Azul Amarillo",
  "Broussonetia papyrifera": "Morera de Papel",
  "Carduus nutans": "Cardo Cabeceo",
  "Cortaderia selloana": "Hierba de la Pampa",
  "Eichhornia crassipes": "Jacinto de Agua Común",
  "Gleditsia triacanthos": "Acacia de Tres Espinas",
  "Hedera helix": "Hiedra Inglesa",
  "Hydrilla verticillata": "Hidrila",
  "Imperata cylindrica": "Cogón",
  "Juniperus virginiana": "Cedro Rojo del Este",
  "Kummerowia striata": "Trébol Japonés",
  "Lespedeza bicolor": "Lespedeza Arbustiva",
  "Lespedeza cuneata": "Lespedeza China",
  "Ligustrum sinense": "Aligustre Chino",
  "Lonicera japonica": "Madreselva Japonesa",
  "Lygodium japonicum": "Helecho Trepador Japonés",
  "Magnolia grandiflora": "Magnolia del Sur",
  "Manihot grahamii": "Manihot de Graham",
  "Melia azedarach": "Árbol del Paraíso",
  "Myriophyllum spicatum": "Milenrama Acuática Euroasiática",
  "Nandina domestica": "Bambú Sagrado",
  "Paspalum dilatatum": "Pasto Miel",
  "Paspalum notatum": "Pasto Bahía",
  "Paspalum urvillei": "Pasto de Vasey",
  "Paulownia tomentosa": "Árbol Princesa",
  "Phragmites australis": "Carrizo Común",
  "Phyllanthus urinaria": "Hierba Amarga",
  "Phyllostachys aurea": "Bambú Dorado",
  "Poncirus trifoliata": "Naranjo Trifoliado",
  "Pueraria montana": "Kudzu",
  "Robinia pseudoacacia": "Falsa Acacia",
  "Rosa bracteata": "Rosa de Macartney",
  "Rosa multiflora": "Rosa Multiflora",
  "Salvinia molesta": "Salvinia Gigante",
  "Solanum viarum": "Manzana de Sodoma Tropical",
  "Sorghum halepense": "Pasto Johnson",
  "Tamarix ramosissima": "Tamarisco",
  "Triadica sebifera": "Árbol de Sebo Chino",
  "Vernicia fordii": "Árbol del Tung",
  "Vicia minutiflora": "Veza de Flor Pequeña",
  "Vinca major": "Vincapervinca Mayor",
  "Wisteria sinensis": "Glicina China"
};

// Ecoregion display names (English)
const ecoregionNames = {
  chihuahuanDeserts: "Chihuahuan Deserts",
  southwesternTablelands: "Southwestern Tablelands",
  highPlains: "High Plains",
  centralGreatPlains: "Central Great Plains",
  crossTimbers: "Cross Timbers",
  edwardsPlateau: "Edwards Plateau",
  southernTexasPlains: "Southern Texas Plains",
  texasBlacklandPrairies: "Texas Blackland Prairies",
  eastCentralTexasPlains: "East Central Texas Plains",
  westernGulfCoastalPlain: "Western Gulf Coastal Plain",
  southCentralPlains: "South Central Plains",
  arizonaNewMexicoMountains: "Arizona/New Mexico Mountains"
};

// Ecoregion display names (Spanish)
const ecoregionNamesSpa = {
  chihuahuanDeserts: "Desiertos de Chihuahua",
  southwesternTablelands: "Mesetas del Suroeste",
  highPlains: "Grandes Llanuras",
  centralGreatPlains: "Grandes Llanuras Centrales",
  crossTimbers: "Bosques Cruzados",
  edwardsPlateau: "Meseta de Edwards",
  southernTexasPlains: "Llanuras del Sur de Texas",
  texasBlacklandPrairies: "Praderas de Tierra Negra de Texas",
  eastCentralTexasPlains: "Llanuras del Centro Este de Texas",
  westernGulfCoastalPlain: "Llanura Costera del Golfo Occidental",
  southCentralPlains: "Llanuras del Centro Sur",
  arizonaNewMexicoMountains: "Montañas de Arizona/Nuevo México"
};

// Get species for a specific ecoregion
function getSpeciesForEcoregion(ecoregionId) {
  return invasiveSpeciesData.filter(species =>
    species.ecoregions.includes(ecoregionId)
  );
}
