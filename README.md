# GroupLayersCombinationForPotoshop
Do combinations possibles with or without repetition of the all groups layers


---------------------------------------------------

***Important***
- You must organize your photoshop project layers in groups before to use these command sequence files. Each different groups will be used for the layers combinations-
- The script will create the "Combination Results" folder and "Scripting.js" file in the same directory than you photoshop that runs this command sequence.
- The png file created will have a incremental number and a vector that represent the layers selected in each groups.


You can use the "GroupLayersCombinationWithoutRepetitionForPotoshop.js" or "GroupLayersCombinationWithRepetitionForPotoshop.js"scripting files as command line sequence in pothoshop in order to combine all groups layers with or with out repetition.

If you want use "GroupLayersCombinationWithoutRepetitionForPotoshop.js" file, you have to select between 3 option:

0 - Do nothing :

The command sequence do nothing.

Positive number - Combine all groups layers.(Use scripting file):
The command sequence combine all groups layers without repetition, and it have the posibility of use "scripting.js" file to record the last combination result to avoid do the same repetition
in future command sequence execution.

Negative number - Combine all groups layers.(Do not use scripting file)
The command sequence combine all groups layers without repetition and ignore scripting file, so it can generate repetition with the results of the previus command sequence execution.

Then you will recieve a message with the quantity of the possibles combination witout repetitions of the all groups layers and you can set a quantity limit and you have to select between 2 options:

Negative number or 0: No amount limit, so the script runs until all possible combinations have been made.

Positive number: it will be used as quantity limit, so the script runs until do quantity limit that you set.