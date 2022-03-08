function Visible() {
    
    while(recursiveCount < combinationsPossible)
    {
        if(!recursiveResult[recursiveCount])
        {
            recursiveResult[recursiveCount] = [];
        }

        var currentResult = SelectLayersCombinationAsVisible();
        recursiveResult[recursiveCount] = currentResult;
        Save();
        Revert();
        recursiveCount++;
    }

}

function SelectLayersCombinationAsVisible(){
    
    var currentResult = [];
    var Grps = app.activeDocument.layerSets;
    for (var i = 0; i < Grps.length; i++) { 
        var tmp = app.activeDocument.layerSets[i].layers.length; 
        app.activeDocument.layerSets[i].visible = true; 
        var groupChildArr = app.activeDocument.layerSets[i].layers; 
        var randLays = Math.floor(Math.random() * tmp);
        groupChildArr[randLays].visible = true;
        
        currentResult.push(randLays);
    }

    while(!LayersCombinationValid(currentResult)){
        Revert();
        currentResult = SelectLayersCombinationAsVisible();
    }

    return currentResult;
}

function LayersCombinationValid(currentResult){
    for (var key in recursiveResult) {
        var count = 0;
        for(var i = 0; recursiveResult[key] && i < recursiveResult[key].length; i++){
            var recursiveElement = recursiveResult[key][i];
            if(recursiveElement == currentResult[i]){
                count++;
            }
        }

        var GrpsCount = app.activeDocument.layerSets.length + 1;
        if(count == GrpsCount){
            return false;
        }
    }

    return true;
}

function Save() {
    var outFolder = app.activeDocument; var outPath = outFolder.path; var fName = "DeliveryTruckFactory"; var f = new Folder(outPath + "/" + fName); if (!f.exists) { f.create() }
    var saveFile = new File(outPath + "/" + fName + "/" + "Truck_" + recursiveCount + "_" + recursiveResult[recursiveCount].toString() + ".png"); pngSaveOptions = new PNGSaveOptions(); pngSaveOptions.interlaced = false; app.activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE);
}

function CombinationPossible(){
    var GrpsLength = app.activeDocument.layerSets.length;
    var combinationsPossible = 0;
    for(var i=0;i<GrpsLength;i++) {
        var groupChildArrLength = app.activeDocument.layerSets[i].layers.length;
        if(i == 0)
        {
            combinationsPossible = groupChildArrLength;
        }
        else
        {
            combinationsPossible = combinationsPossible * groupChildArrLength;
        }
    }

    return combinationsPossible;
}

function Revert() { var idRvrt = charIDToTypeID("Rvrt"); executeAction(idRvrt, undefined, DialogModes.NO); }
var count = prompt("Set the option that you want: \n 0 - Do nothing. \n Positive number - Do the combinations possible of the all groups layers.", "");
var recursiveCount = 0;
var recursiveResult = {};
var combinationsPossible = CombinationPossible();

if(count && count > 0 && combinationsPossible > 0) { 
    Visible();
}