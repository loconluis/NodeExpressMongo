'use strict'

//Exportamos el modelo
let Favorite = require('../models/favorite');


function prueba(req, res){
    let nombre = req.params.nombre;
    
    if(req.params.nombre){
        let nombre = req.params.nombre;
    }else{
        let nombre = "SIN NOMBRE";
    }

    res.status(200).send({ data: [1,2,3],
            message: 'HOLA',
            nombre: nombre      
            });
}

//Metodos para nuestra apiREST
function getFavorite(req, res){
    /*Obtener un favorito*/
    const favoritoId = req.params.id;

    Favorite.findById(favoritoId, function(err, favorito){
        if(err){
            res.status(500).send({message: 'Error al devolver marcador'});
        } if(!favorito){
            res.status(404).send({message: 'No hay marcador'});
        }
        res.status(200).send({favorito});
    });
    
}

function getFavorites(req, res){
    /*Obtener un favoritos*/
    Favorite.find({}, (err, favorites)=>{
        if(err){
            res.status(500).send({message: 'Error al devolver los marcadores'})
        }
        if(!favorites){
            res.status(404).send({message: 'No hay marcadores'});
        }

        res.status(200).send({favorites});
    });

}

function saveFavorite(req, res){
    /*Guarda un favorito*/
    let favorite = new Favorite();
    const params = req.body;

    favorite.title = params.title;
    favorite.description = params.description;
    favorite.url = params.url;

    favorite.save((err, favoriteStored )=>{ 
        if(err){
            res.status(500).send({message: 'Error al guardar el marcador'});
        }else{
            res.status(200).send({favorite: favoriteStored});
        }
    })
}

function updateFavorite(req, res){
    /*Actualiza un favorito*/
    const favoritoId = req.params.id;
    const update = req.body;

    Favorite.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdate)=>{
        if(err){
            res.status(500).send({message: 'Error al actualizar el marcador'});
        }
        res.status(200).send({favorito: favoritoUpdate});
    });
    
    res.status(200).send({favorito: params});

}

function deleteFavorite(req, res){
    /*Elimina un favorito*/
    const favoritoId = req.params.id;
    Favorite.findById(favoritoId, function(err, favorito){
        if(err){
            res.status(500).send({message: 'Error al devolver marcador'});
        } if(!favorito){
            res.status(404).send({message: 'No hay marcador'});
        }else{
            favorito.remove(err =>{
                if(err){
                    res.status(500).send({message: 'Error al borrar'});
                }else{
                    res.status(200).send({message: 'El marcador se ha eliminado'});
                }
            });
        }
        res.status(200).send({favorito});
    });

    res.status(200).send({data: favoritoId});

}

module.exports = {
    prueba, 
    getFavorite,
    getFavorites,
    saveFavorite,
    updateFavorite,
    deleteFavorite
}