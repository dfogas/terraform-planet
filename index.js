"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_store_1 = require("./store/create-store");
exports.createStore = create_store_1.createStore;
var terraform_game_reducer_1 = require("./domain/reducers/terraform-game.reducer");
exports.terraformGame = terraform_game_reducer_1.terraformGame;
