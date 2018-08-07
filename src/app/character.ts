export class Character {
  constructor(
    public id: number,
    public img: string,
    public location: number,
    public team: number,
    public movement: number,
    public health,
    public attack: number,
    public defense: number
  ) { }
}

export const mockCharacters: Character[] = [
  { id: 0, img: 'empty.png', location: -1, team: 0, movement: 0, health: 0, attack: 0, defense: 0 },
  { id: 1, img: 'person.png', location: -1, team: 0, movement: 1, health: 100, attack: 15, defense: 10 },
  { id: 2, img: 'MrBravo.webp', location: -1, team: 0, movement: 1, health: 100, attack: 25, defense: 15 },
  { id: 3, img: 'mighty.png', location: -1, team: 0, movement: 2, health: 100, attack: 30, defense: 20 },
  { id: 4, img: 'chewie.png', location: -1, team: 0, movement: 1, health: 150, attack: 50, defense: 15 },
  { id: 5, img: 'enfys.png', location: -1, team: 0, movement: 1, health: 60, attack: 50, defense: 20 },
  { id: 6, img: 'luigi.png', location: -1, team: 0, movement: 1, health: 100, attack: 30, defense: 15 },
  { id: 7, img: 'mudtrooper.png', location: -1, team: 0, movement: 1, health: 120, attack: 50, defense: 20 },
  { id: 8, img: 'enfys.png', location: -1, team: 0, movement: 1, health: 100, attack: 3, defense: 5 },
  { id: 9, img: 'chewie.png', location: -1, team: 0, movement: 1, health: 100, attack: 3, defense: 5 },
  { id: 10, img: 'pikachu.png', location: -1, team: 0, movement: 1, health: 100, attack: 3, defense: 5 },
];
