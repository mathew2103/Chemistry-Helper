const reactions = {
    "methane": {
        "Cl / uv": "chloromethane",
        "Br / uv": "bromomethane",
        "O2": "carbon dioxide",
        "O2 / Cu (523K , 100 atm)": "methanol",
        "O2 / Mo2O3": "methanal",
        "O2 / (CH3COO)2Mn": "methanoic acid"
    },
    "ethane": {
        "Cl / uv": "chloroethane",
        "Br / uv": "bromoethane",
        "O2": "carbon dioxide",
        "O2 / Cu (523K , 100 atm)": "ethanol",
        "O2 / Mo2O3": "ethanal",
        "O2 / (CH3COO)2Mn": "ethanoic acid"
    },
    "propane": {
        "Cl / uv": "2-chloropropane",
        "Br / uv": "2-bromopropane",
        "O2": "carbon dioxide"
    },
    "butane": {
        "Cl / uv": "2-chlorobutane",
        "Br / uv": "2-bromobutane",
        "O2": "carbon dioxide"
    },
    "ethene": {
        "HCl": "chloroethane",
        "HBr": "bromoethane",
        "H2O / dil H2SO4": "ethanol",
        "O3 / Zn dust / H2O": "methanal",
        "B2H6": "ethanol",
        "Br2 / CCl4": "1,2-dibromoethane",
        "Cl2 / CCl4": "1,2-dichloroethane",
        "Cl2 / H2O": "2-chloroethanol",
        "Br2 / H2O": "2-bromoethanol",
        "CuCl2 / O2": "ethanal"
    },
    "propene": {
        "HCl": "2-chloropropane",
        "HBr": "2-bromopropane",
        "HBr / Peroxide": "1-bromopropane",
        "O3 / Zn dust / H2O": "ethanal",
        "H2O / dil H2SO4": "propan-2-ol",
        "B2H6": "propan-1-ol",
        "Br2 / CCl4": "1,2-dibromopropane"
    },
    "but-1-ene": {
        "Cl2": "1,2-dichlorobutane",
        "Br2": "1,2-dibromobutane",
        "HCl": "2-chlorobutane",
        "HBr": "2-bromobutane",
        "HBr / Peroxide": "1-bromobutane"
    },
    "but-2-ene": {
        "H2O / dil H2SO4": "butan-2-ol",
        "Br2 / CCl4": "2,3-dibromobutane",
        "KMnO4 / OH-": "ethanoic acid"
    },
    "ethyne": {
        "Red Hot Fe Tube (873 K)": "benzene",
        "HgSO4 / H2SO4": "ethanal",
        "B2H6 / H2O2 / OH-": "ethanal"
    },
    "propyne": {
        "HgSO4 / H2SO4": "propanone"
    },
    "chloromethane": {
        "aq. NaOH": "methanol",
        "aq. KOH": "methanol",
        "alc. AgCN": "isocyanomethane",
        "alc. KCN": "ethanenitrile",
        "AgNO2": "nitromethane",
        "KNO2": "methyl nitrite",
        "Na / dry ether": "ethane",
        "NaI": "iodomethane",
        "AgF": "fluoromethane",
        "CH3ONa": "methoxymethane",
        "NH3 excess": "methanamine",
        "Red P / HI": "methane",
        "Red P / HBr": "methane",
        "Mg": "methyl magnesium chloride"
    },
    "bromomethane": {
        "aq. NaOH": "methanol",
        "aq. KOH": "methanol",
        "alc. AgCN": "isocyanomethane",
        "alc. KCN": "ethanenitrile",
        "AgNO2": "nitromethane",
        "KNO2": "methyl nitrite",
        "Na / dry ether": "ethane",
        "NaI": "iodomethane",
        "AgF": "fluoromethane",
        "CH3ONa": "methoxymethane",
        "NH3 excess": "methanamine",
        "Red P / HI": "methane",
        "Red P / HBr": "methane",
        "Mg": "methyl magnesium bromide"
    },
    "iodomethane": {
        "aq. NaOH": "methanol",
        "aq. KOH": "methanol",
        "alc. AgCN": "isocyanomethane",
        "alc. KCN": "ethanenitrile",
        "AgNO2": "nitromethane",
        "KNO2": "methyl nitrite",
        "Na / dry ether": "ethane",
        "AgF": "fluoromethane",
        "CH3ONa": "methoxymethane",
        "NH3 excess": "methanamine",
        "Red P / HI": "methane",
        "Red P / HBr": "methane",
        "Mg": "methyl magnesium chloride"
    },
    "chloroethane": {
        "aq. NaOH": "ethanol",
        "aq. KOH": "ethanol",
        "alc. KOH": "ethene",
        "alc. AgCN": "isocyanoethane",
        "alc. KCN": "propanenitrile",
        "AgNO2": "nitroethane",
        "KNO2": "ethyl nitrite",
        "Na / dry ether": "butane",
        "NaI": "iodoethane",
        "AgF": "fluoroethane",
        "CH3ONa": "methoxyethane",
        "NH3 excess": "ethanamine",
        "Red P/ HI": "ethane",
        "Red P/ HBr": "ethane",
        "Mg": "ethyl magnesium chloride",
        "sodium ethoxide": "methoxymethane"
    },
    "bromoethane": {
        "aq. NaOH": "ethanol",
        "aq. KOH": "ethanol",
        "alc. KOH": "ethene",
        "alc. AgCN": "isocyanoethane",
        "alc. KCN": "propanenitrile",
        "AgNO2": "nitroethane",
        "KNO2": "ethyl nitrite",
        "Na / dry ether": "butane",
        "NaI": "iodoethane",
        "AgF": "fluoroethane",
        "CH3ONa": "methoxyethane",
        "NH3 excess": "ethanamine",
        "Red P / HI": "ethane",
        "Red P / HBr": "ethane",
        "Mg": "ethyl magnesium bromide",
        "sodium ethoxide": "methoxymethane"
    },
    "iodoethane": {
        "aq. NaOH": "ethanol",
        "aq. KOH": "ethanol",
        "alc. KOH": "ethene",
        "alc. AgCN": "isocyanoethane",
        "alc. KCN": "propanenitrile",
        "AgNO2": "nitroethane",
        "KNO2": "ethyl nitrite",
        "Na / dry ether": "butane",
        "AgF": "fluoroethane",
        "CH3ONa": "methoxyethane",
        "NH3 excess": "ethanamine",
        "Red P/ HI": "ethane",
        "Red P/ HBr": "ethane",
        "Mg": "ethyl magnesium chloride",
        "sodium ethoxide": "methoxymethane"
    },
    "1,1-dichloroethane": {
        "aq. KOH / Heat": "ethanal"
    },
    "1-bromopropane": {
        "aq. NaOH": "propan-1-ol",
        "aq. KOH": "propan-1-ol",
        "alc. KOH": "propene",
        "alc. AgCN": "1-isocyanopropane",
        "alc. KCN": "1-butanenitrile",
        "AgNO2": "1-nitropropane",
        "KNO2": "1-propyl nitrite",
        "Na / dry ether": "hexane",
        "NaI": "1-iodopropane",
        "AgF": "1-fluoropropane",
        "CH3ONa": "1-methoxypropane",
        "Red P / HI": "propane",
        "Red P / HBr": "propane",
        "Mg": "propyl magnesium bromide",
        "sodium ethoxide": "1-methoxypropane"
    },
    "2-chloropropane": {
        "aq. NaOH": "propan-2-ol",
        "aq. KOH": "propan-2-ol",
        "alc. KOH": "propene",
        "alc. AgCN": "2-isocyanopropane",
        "alc. KCN": "2-methylpropanenitrile",
        "AgNO2": "2-nitropropane",
        "KNO2": "2-propyl nitrite",
        "Na / dry ether": "2,3-dimethylbutane",
        "NaI": "2-iodopropane",
        "AgF": "2-fluoropropane",
        "CH3ONa": "2-methoxypropane",
        "Red P / HI": "propane",
        "Red P / HBr": "propane"
    },
    "1-chloropropane": {
        "aq. NaOH": "propan-1-ol",
        "aq. KOH": "propan-1-ol",
        "alc. KOH": "propene",
        "alc. AgCN": "1-isocyanopropane",
        "alc. KCN": "1-butanenitrile",
        "AgNO2": "1-nitropropane",
        "KNO2": "1-propyl nitrite",
        "Na / dry ether": "hexane",
        "NaI": "1-iodopropane",
        "AgF": "1-fluoropropane",
        "CH3ONa": "1-methoxypropane",
        "Red P / HI": "propane",
        "Red P / HBr": "propane",
        "Mg": "propyl magnesium bromide",
        "sodium ethoxide": "1-methoxypropane"
    },
    "2-bromopropane": {
        "aq. NaOH": "propan-2-ol",
        "aq. KOH": "propan-2-ol",
        "alc. KOH": "propene",
        "alc. AgCN": "2-isocyanopropane",
        "alc. KCN": "2-methylpropanenitrile",
        "AgNO2": "2-nitropropane",
        "KNO2": "2-propyl nitrite",
        "Na / dry ether": "2,3-dimethylbutane",
        "NaI": "2-iodopropane",
        "AgF": "2-fluoropropane",
        "CH3ONa": "2-methoxypropane",
        "Red P / HI": "propane",
        "Red P / HBr": "propane"
    },
    "1,2-dibromoethane": {
        "aq KOH": "ethane-1,2-diol",
        "alc. KOH / NaNH2": "ethyne"
    },
    "1,2-dibromopropane": {
        "alc. KOH / NaNH2": "propyne"
    },
    "2-chlorobutane": {
        "alc. KOH": "but-2-ene",
        "t-BuONa": "but-1-ene"
    },
    "2-bromobutane": {
        "alc. KOH": "but-2-ene",
        "t-BuONa": "but-1-ene"
    },
    "ethanenitrile": {
        "SnCl2 / HCl / H2O": "ethanal",
        "DIBAL-H": "ethanal",
        "CH3MgBr / H+": "propanone",
        "H2 / Pd": "ethanamine",
        "H3O+ (partial)": "ethanamide",
        "H3O+": "ethanoic acid"
    },
    "propanenitrile": {
        "SnCl2 / HCl / H2O": "propanal",
        "DIBAL-H": "propanal",
        "CH3MgBr / H+": "butanone",
        "H3O+ (partial)": "propanamide",
        "H3O+": "propanoic acid"
    },
    "methanol": {
        "Na": "sodium methoxide",
        "SOCl2": "chloromethane",
        "PCl5": "chloromethane",
        "PCl3": "chloromethane",
        "ZnCl2 / HCl": "chloromethane",
        "HCOOH": "methyl methanoate",
        "Cu (573K)": "methanal",
        "KMnO4 / H+": "methanoic acid",
        "HCl": "chloromethane",
        "HBr": "bromomethane",
        "HI": "iodomethane",
        "Red P / HI": "methane",
        "Red P / HBr": "methane"
    },
    "ethanol": {
        "Na": "sodium ethoxide",
        "SOCl2": "chloroethane",
        "PCl5": "chloroethane",
        "PCl3": "chloroethane",
        "ZnCl2 / HCl": "chloroethane",
        "conc. H2SO4 (443K)": "ethene",
        "Al2O3 (663K)": "ethene",
        "HCl": "chloroethane",
        "HBr": "bromoethane",
        "HI": "iodoethane",
        "Red P / HI": "ethane",
        "Red P / HBr": "ethane",
        "Cu (573K)": "ethanal",
        "KMnO4 / H+": "ethanoic acid",
        "conc. H2SO4 (413K)": "methoxymethane"
    },
    "ethane-1,2-diol": {
        "KMnO4 / H2SO4": "ethane-1,2-dioic acid",
        "Red P / HI": "ethene"
    },
    "propan-1-ol": {
        "PCl5": "1-chloropropane",
        "KMnO4 / H+": "propanoic acid",
        "PCC": "propanal",
        "conc H2SO4": "propene"
    },
    "propan-2-ol": {
        "PCl5": "2-chloropropane",
        "PCC": "propanone",
        "conc H2SO4": "propene"
    },
    "methanal": {
        "HCN": "hydroxyethanenitrile",
        "NaHSO3": "sodium 1-hydroxymethanesulphonate",
        "Red P / HI": "methane",
        "Red P / HBr": "methane",
        "KMnO4 / H+": "methanoic acid",
        "K2Cr2O7 / H2SO4": "methanoic acid",
        "LiAlH4": "methanol",
        "NaBH4": "methanol",
        "Zn-Hg / HCl": "methane",
        "CH3MgBr / H3O+": "ethanol",
        "NH2NH2 / aq. KOH": "methane",
        "NH3": "1,3,5,7-tetraazaadamantane"
    },
    "ethanal": {
        "HCN": "hydroxypropionitrile",
        "NaHSO3": "sodium 1-hydroxyethanesulphonate",
        "Red P / HI": "ethane",
        "Red P / HBr": "ethane",
        "KMnO4 / H+": "ethanoic acid",
        "K2Cr2O7 / H2SO4": "ethanoic acid",
        "LiAlH4": "ethanol",
        "NaOH": "3-hydroxybutanal",
        "CH3MgBr / H3O+": "propan-2-ol",
        "NaOH / I2": "triiodomethane",
        "NaOH / Br2": "tribromomethane",
        "NaOH / Cl2": "trichloromethane",
        "Zn-Hg / HCl": "ethane",
        "NaBH4": "ethanol",
        "NH2NH2 / aq. KOH": "ethane",
        "CH3CHO": "3-hydroxybutanal",
        "Dry HCl / CH3OH": "1,1-diethoxyethane",
        "NH3 (Warm)": "ethanimine",
        "NH2OH": "acetaldoxime",
        "NH2NH2 / H3O+": "acetaldehyde hydrazone"
    },
    "ethanedial": {
        "H2 / Ni": "ethane"
    },
    "propanone": {
        "H2O / LiAlH4": "propan-2-ol",
        "NaOH / I2": "triiodomethane",
        "NaOH / Br2": "tribromomethane",
        "NaOH / Cl2": "trichloromethane",
        "I2": "iodopropanone",
        "HCN": "acetone cyanohydrin",
        "NaOH (Heat)": "4-methylpent-3-en-2-one",
        "CH3MgBr": "1,1-dimethylethanol",
        "SeO2": "2-oxopropanal",
        "NH2NH2 / H3O+": "acetone hydrazone",
        "Zn-Hg / conc. HCl": "propane"
    },
    "methanoic acid": {
        "LiAlH4": "methanol",
        "PCl5": "methanoyl chloride",
        "PCl3": "methanoyl chloride",
        "SOCl2": "methanoyl chloride",
        "Na": "sodium methanoate",
        "NH3 / H2O (Heat)": "methanamide",
        "Red P/ HI": "methane",
        "HN3 / conc. H2SO4": "methanamine",
        "MnO (573K)": "methanol"
    },
    "ethanoic acid": {
        "LiAlH4": "ethanol",
        "PCl5": "ethanoyl chloride",
        "PCl3": "ethanoyl chloride",
        "SOCl2": "ethanoyl chloride",
        "Na": "sodium ethanoate",
        "NH3 / H2O (Heat)": "ethanamide",
        "Red P/ HI": "ethane",
        "NH3 / conc. H2SO4": "ethanamine",
        "MnO (573K)": "ethanol",
        "Red P / Cl2": "chloroethanoic acid",
        "Red P / Br2": "bromoethanoic acid",
        "Red P / I2": "iodoethanoic acid"
    },
    "propanoic acid": {
        "LiAlH4": "propan-1-ol",
        "PCl5": "propanoyl chloride",
        "PCl3": "propanoyl chloride",
        "SOCl2": "propanoyl chloride",
        "Na": "sodium propanoate",
        "NH3 / H2O (Heat)": "propanamide",
        "Red P/ HI": "propane",
        "NH3 / conc. H2SO4": "propan-1-amine",
        "MnO (573K)": "propan-1-ol"
    },
    "methanamide": {
        "Br2 / aq. NaOH": "ammonia",
        "NaOH / H+": "methanoic acid",
        "LiAlH4": "methanamine",
        "P2O5": "hydrogen cyanide"
    },
    "ethanamide": {
        "Br2 / aq. NaOH": "methanamine",
        "NaOH / H+": "ethanoic acid",
        "LiAlH4": "ethanamine",
        "P2O5": "ethanenitrile"
    },
    "propanamide": {
        "Br2 / aq. NaOH": "ethanamine",
        "NaOH / H+": "propanoic acid",
        "LiAlH4": "propan-1-amine",
        "P2O5": "propanenitrile"
    },
    "methanoyl chloride": {
        "H2O": "methanoic acid",
        "NH3 excess": "methanamide"
    },
    "ethanoyl chloride": {
        "H2O": "ethanoic acid",
        "NH3 excess": "ethanamide",
        "sodium ethoxide": "ethylethanoate"
    },
    "propanoyl chloride": {
        "H2O": "propanoic acid",
        "NH3 excess": "propanamide"
    },
    "methanamine": {
        "CH3COCl": "N-methylacetamide",
        "NaNO2 / HCl": "methanol"
    },
    "ethanamine": {
        "CH3COCl": "N-ethylacetamide",
        "NaNO2 / HCl": "ethanol"
    },
    "propan-1-amine": {
        "CH3COCl": "N-propylacetamide",
        "NaNO2 / HCl": "propan-1-ol"
    },
    "benzene": {
        "Cl2 / Fe": "chlorobenzene",
        "conc HNO3 / conc H2SO4": "nitrobenzene",
        "conc H2SO4": "benzenesulphonic acid",
        "H2 / Ni (473 K)": "cyclohexane",
        "O3 / Zn (Heat)": "ethanedial",
        "CO / anhyd. AlCl3 / HCl / CuCl": "benzaldehyde",
        "CrO2Cl2 / CS2": "benzaldehyde",
        "CH3COCl / anhyd. AlCl3": "acetophenone",
        "CH3Cl / anhyd. AlCl3": "toluene"
    },
    "toluene": {
        "H2 / Ni (473 K)": "1-methylcyclohexene",
        "conc HNO3 / conc H2SO4": "2,4,6-trinitrotoluene",
        "CrO2Cl2 / CS2 / H+": "benzaldehyde",
        "KMnO4 / H+": "benzoic acid",
        "Cl2 / uv": "benzyl chloride"
    },
    "chlorobenzene": {
        "NaOH / HCl (300 atm, 623K)": "phenol",
        "conc H2SO4": "4-chlorobenzenesulphonic acid",
        "Br2 / FeBr3": "4-bromochlorobenzene",
        "Cl2 / FeCl3": "1,4-dichlorobenzene",
        "conc. HNO3 / conc. H2SO4": "4-nitrochlorobenzene",
        "NH3 / Cu2O catalyst (60 atm, 523-773K)": "aniline",
        "Na / Dry Ether": "biphenyl",
        "CH3ONa": "anisole"
    },
    "anisole": {
        "HI": "phenol",
        "Br2 / CH3COOH": "4-bromoanisole",
        "conc. HNO3 / conc. H2SO4": "4-nitroanisole",
        "CH3Cl / anhyd. AlCl3 / CS2": "4-methoxytoluene"
    },
    "phenol": {
        "Zn": "benzene",
        "Br2 / H2O": "2,4,6-tribromophenol",
        "Br2 / CS2": "4-bromophenol",
        "Br2 / CCl4": "4-bromophenol",
        "conc. HNO3": "2,4,6-trinitrophenol",
        "CO2 / NaOH / H+ (423K, 3-7 atm)": "2-hydroxybenzoic acid",
        "H2SO4 (373K)": "4-hydroxybenzenesulfonic acid",
        "CHCl3 / aq. KOH": "2-hydroxybenzaldehyde",
        "NH3 / anhyd. ZnCl2 catalyst (573K)": "aniline"
    },
    "benzaldehyde": {
        "Zn-Hg / conc. HCl": "toluene",
        "conc. HNO3 / conc. H2SO4": "3-nitrobenzaldehyde",
        "conc. H2SO4": "3-formylbenzenesulfonic acid",
        "Br2 / FeBr": "3-bromobenzaldehyde",
        "Cl2 / FeCl": "3-chlorobenzaldehyde",
        "NH3": "1-phenyl-N,N'-bis[(E)-phenylmethylidene]methanediamine",
        "C6H5NH2": "benzylideneaniline"
    },
    "benzoic acid": {
        "LiAlH4": "phenylmethanol",
        "PCl5": "benzoyl chloride",
        "conc HNO2 / conc. H2SO4": "4-nitrobenzoic acid",
        "Br2 / FeBr": "3-bromobenzoic acid",
        "Cl2 / FeCl": "3-chlorobenzoic acid",
        "NaOH / CaO": "benzene"
    },
    "aniline": {
        "NaNO2 / HCl (273-278K)": "benzenediazonium chloride",
        "Br / H20": "2,4,6-tribromoaniline",
        "Br2 / CS2": "4-bromoaniline",
        "Na2CrO7 / H2SO4": "p-benzoquinone",
        "Ni-H2": "cyclohexylamine",
        "conc. HNO3 / conc. H2SO4": "4-nitroaniline",
        "conc. H2SO4": "sulphanilic acid"
    },
    "benzenediazonium chloride": {
        "NaOH / H20": "phenol",
        "HCl / Cu": "chlorobenzene",
        "HBr / Cu": "bromobenzene",
        "CuCl": "chlorobenzene",
        "CuBr": "bromobenzene",
        "CuCN": "benzonitrile",
        "KI": "iodobenzene",
        "HBF4 / (Heat)": "fluorobenzene",
        "HBF4 / Cu / NaNO2 (Heat)": "nitrobenzene",
        "H3PO2 / Cu": "benzene",
        "CuCN / H3O+": "benzoic acid",
        "KSH": "thiophenol"
    },
    "nitrobenzene": {
        "Zn / HCl": "aniline",
        "Sn / HCl": "aniline",
        "LiAlH4": "azobenzene",
        "Zn dust / aq. NaOH": "hydrazobenzene",
        "Zn / NH4Cl / 50% C2H5OH (Heat)": "phenylhydroxyamine",
        "fuming HNO3 / conc. H2SO4": "1,3,5-trinitrobenzene",
        "conc. HNO3 / conc. H2SO4": "1,3-dinitrobenzene",
        "Cl2 / FeCl3": "3-chloronitrobenzene",
        "conc. H2SO4 (Heat)": "3-nitrobenzene sulphonic acid"
    },
    "benzamide": {
        "Br2 / KOH": "aniline",
        "NaOH / dil. HCl / H3O+": "benzoic acid"
    },
    "2-hydroxybenzoic acid": {
        "(CH3CO)2O": "2-acetoxybenzoic acid"
    },
    "acetophenone": {
        "Zn-Hg / conc. HCl": "ethyl benzene"
    },
    "benzonitrile": {
        "H2O / H+": "benzoic acid",
        "H2O / OH-": "benzamide"
    },
    "glucose": {
        "Br2 in H2O": "gluconic acid",
        "dil. HNO3": "glucaric acid",
        "Red P / HI": "hexane"
    }
}
const reagentList = document.getElementById('reagent-list');
const errorP = document.getElementById('error');

function findReagents(form) {
    errorP.innerText = ""
    while (reagentList.firstChild) {
        reagentList.removeChild(reagentList.firstChild)
    }
    let reactant = form.reactant.value.toLowerCase();
    let product = form.product.value.toLowerCase();

    if (!reactant || !product) return errorP.innerText = "Enter both reactant and product.."
    else if ((reactant == product)) return errorP.innerText = "What are you trying to convert?"
    let path = "";
    try {
        path = find_conversion_path(reactant, product)
    } catch (e) {
        return errorP.innerText = "HELLO"
    }

    // const path = find_conversion_path(document.getElementById("reactant").innerText, document.getElementById("product").innerText)

    for (a of path) {
        const li = document.createElement("li")
        const values = a.split(',')
        li.innerText = `${values[0]} + ${values[1]} = ${values[2]}`
        reagentList.appendChild(li)
    }
}

function find_conversion_path(starting_compound, target_compound) {
    let queue = [[starting_compound, []]]
    let visited = new Set();

    for (a of queue) {

        let [current, path] = a;
        if (current == target_compound) return path.split('\n').filter(a => a != "");
        visited.add(current)

        // console.log(Object.values(reactions[current] ?? {}))
        for (reagent of Object.keys(reactions[current] ?? {})) {
            const product = reactions[current][reagent]
            // console.log(reagent, product)
            if (visited.has(product) == false) {
                new_path = path + "\n" + [[current, reagent, product]]
                queue.push([product, new_path])
            }
            // console.log(queue)
        }
    }

}

