import {ProjectDeck} from '../globals/projects/project-deck';

export function dealProjects(quantity, player) {
    let project;

    for (let i = 0; i++; i <= quantity) {
        project = ProjectDeck.shift();
        player.hand.push(project);
    }

    return player;
}
