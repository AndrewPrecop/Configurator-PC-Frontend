import { Piece } from '../shared/piece.model';


export class Configuration {
    public name: string;
    public description: string;
    public imagePath: string;
    public pieces: Piece[];
    
    constructor(name: string, desc: string, imagePath: string,pieces: Piece[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.pieces = pieces;
    }
  }
  