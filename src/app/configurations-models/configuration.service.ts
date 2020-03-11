import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Configuration } from './configuration.model';
import { Piece } from '../shared/piece.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ConfigurationService {
  configurationsChanged = new Subject<Configuration[]>();

  private configurations: Configuration[] = [
    new Configuration(
      'PC Gaming',
      'A super PC for Gaming - just awesome!',
      'https://www.newegg.com/insider/wp-content/uploads/2019/04/pc-gaming-advantages.jpeg',
      [
        new Piece('CPU: AMD Ryzen 9 3900x', 1),
        new Piece('CPU Cooler: Deepcool CAPTAIN 240EX RGB 153.04 CFM Liquid', 1),
        new Piece('GPU: EVGA GeForce RTX 2080 8 GB XC ULTRA GAMING',1),
        new Piece('RAM: G.Skill Trident Z Neo 32GB (2x 16GB) DDR4-3600',1),
        new Piece('Storage: 2 x Samsung 860 Evo 1TB 2.5", 1 x Samsung 860 Evo 250GB 2.5" SSD',1),
        new Piece('PSU: EVGA 650 W 80+ Gold Certified Semi-modular ATX',1),
        new Piece('Motherboard: Asus ROG Crosshair VII Hero ATX AM4',1),
        new Piece('Case: Fractal Design Define R6 Blackout ATX Mid Tower',1),
        new Piece('Monitor: 2 x LG 27UD58-B 27.0" 3840x2160 60Hz',1),
        new Piece('Case Fan: 4x Fractal Design GP14-WT 68.4 CFM 140 mm',1),
        new Piece('Inputs:Razer Ornata Chroma Wired Gaming < br />Razer Naga Hex VR Wired Laser',1),
        new Piece('Audio:Astro A50 + Base Station XB1 7.1 Channel Headphones',1),
        new Piece('Others:Ensourced 24 Pin And 8+6 PCIe Paracord Extension Cables<>TP-Link TL-WN881ND PCIe x1 802.11b/g/n<>Microsoft Windows 10 Pro OEM 64-bit',1)
      ]),
    new Configuration(
      'PC Programming',
      'A super PC for Programming - just awesome!',
      'https://st3.depositphotos.com/6093758/16708/v/600/depositphotos_167086548-stock-video-male-hacker-programmer-uses-a.jpg',
      [
        new Piece('CPU: AMD Ryzen 9 3900x', 1),
        new Piece('CPU Cooler: Deepcool CAPTAIN 240EX RGB 153.04 CFM Liquid', 1),
        new Piece('GPU: EVGA GeForce RTX 2080 8 GB XC ULTRA GAMING',1),
        new Piece('RAM: G.Skill Trident Z Neo 32GB (2x 16GB) DDR4-3600',1),
        new Piece('Storage: 2 x Samsung 860 Evo 1TB 2.5", 1 x Samsung 860 Evo 250GB 2.5" SSD',1),
        new Piece('PSU: EVGA 650 W 80+ Gold Certified Semi-modular ATX',1),
        new Piece('Motherboard: Asus ROG Crosshair VII Hero ATX AM4',1),
        new Piece('Case: Fractal Design Define R6 Blackout ATX Mid Tower',1),
        new Piece('Monitor: 2 x LG 27UD58-B 27.0" 3840x2160 60Hz',1),
        new Piece('Case Fan: 4x Fractal Design GP14-WT 68.4 CFM 140 mm',1),
        new Piece('Inputs:Razer Ornata Chroma Wired Gaming < br />Razer Naga Hex VR Wired Laser',1),
        new Piece('Audio:Astro A50 + Base Station XB1 7.1 Channel Headphones',1),
        new Piece('Others:Ensourced 24 Pin And 8+6 PCIe Paracord Extension Cables<>TP-Link TL-WN881ND PCIe x1 802.11b/g/n<>Microsoft Windows 10 Pro OEM 64-bit',1)
    
      ]),
      new Configuration(
        'PC Office',
        'A super PC for Office Work - just awesome!',
        'https://previews.123rf.com/images/boggy22/boggy221808/boggy22180800044/111188397-young-man-working-on-pc-computer-in-office.jpg',
        [
          new Piece('CPU: AMD Ryzen 9 3900x', 1),
        new Piece('CPU Cooler: Deepcool CAPTAIN 240EX RGB 153.04 CFM Liquid', 1),
        new Piece('GPU: EVGA GeForce RTX 2080 8 GB XC ULTRA GAMING',1),
        new Piece('RAM: G.Skill Trident Z Neo 32GB (2x 16GB) DDR4-3600',1),
        new Piece('Storage: 2 x Samsung 860 Evo 1TB 2.5", 1 x Samsung 860 Evo 250GB 2.5" SSD',1),
        new Piece('PSU: EVGA 650 W 80+ Gold Certified Semi-modular ATX',1),
        new Piece('Motherboard: Asus ROG Crosshair VII Hero ATX AM4',1),
        new Piece('Case: Fractal Design Define R6 Blackout ATX Mid Tower',1),
        new Piece('Monitor: 2 x LG 27UD58-B 27.0" 3840x2160 60Hz',1),
        new Piece('Case Fan: 4x Fractal Design GP14-WT 68.4 CFM 140 mm',1),
        new Piece('Inputs:Razer Ornata Chroma Wired Gaming < br />Razer Naga Hex VR Wired Laser',1),
        new Piece('Audio:Astro A50 + Base Station XB1 7.1 Channel Headphones',1),
        new Piece('Others:Ensourced 24 Pin And 8+6 PCIe Paracord Extension Cables<>TP-Link TL-WN881ND PCIe x1 802.11b/g/n<>Microsoft Windows 10 Pro OEM 64-bit',1)
    
        ]),
        new Configuration(
          'PC Home',
          'A super PC for Home use - just awesome!',
          'https://i.pinimg.com/originals/95/7c/d5/957cd56580a832b0650e50889920f8f8.jpg',
          [
            new Piece('CPU: AMD Ryzen 9 3900x', 1),
        new Piece('CPU Cooler: Deepcool CAPTAIN 240EX RGB 153.04 CFM Liquid', 1),
        new Piece('GPU: EVGA GeForce RTX 2080 8 GB XC ULTRA GAMING',1),
        new Piece('RAM: G.Skill Trident Z Neo 32GB (2x 16GB) DDR4-3600',1),
        new Piece('Storage: 2 x Samsung 860 Evo 1TB 2.5", 1 x Samsung 860 Evo 250GB 2.5" SSD',1),
        new Piece('PSU: EVGA 650 W 80+ Gold Certified Semi-modular ATX',1),
        new Piece('Motherboard: Asus ROG Crosshair VII Hero ATX AM4',1),
        new Piece('Case: Fractal Design Define R6 Blackout ATX Mid Tower',1),
        new Piece('Monitor: 2 x LG 27UD58-B 27.0" 3840x2160 60Hz',1),
        new Piece('Case Fan: 4x Fractal Design GP14-WT 68.4 CFM 140 mm',1),
        new Piece('Inputs:Razer Ornata Chroma Wired Gaming < br />Razer Naga Hex VR Wired Laser',1),
        new Piece('Audio:Astro A50 + Base Station XB1 7.1 Channel Headphones',1),
        new Piece('Others:Ensourced 24 Pin And 8+6 PCIe Paracord Extension Cables<>TP-Link TL-WN881ND PCIe x1 802.11b/g/n<>Microsoft Windows 10 Pro OEM 64-bit',1)
    
          ]),
        
  ];

  constructor(private slService: ShoppingListService) {}

  setConfigurations(configuratios: Configuration[]) {
    this.configurations = configuratios;
    this.configurationsChanged.next(this.configurations.slice());
  }

  getConfigurations() {
    return this.configurations.slice();
  }
  getConfiguration(index: number) {
    return this.configurations[index];
  }
  addPiecesToShoppingList(pieces: Piece[]) {
    this.slService.addPieces(pieces);
  }
  addConfiguration(configuration: Configuration) {
    this.configurations.push(configuration);
    this.configurationsChanged.next(this.configurations.slice());
  }

  updateConfiguration(index: number, newConfiguration: Configuration) {
    this.configurations[index] = newConfiguration;
    this.configurationsChanged.next(this.configurations.slice());
  }

  deleteConfiguration(index: number) {
    this.configurations.splice(index, 1);
    this.configurationsChanged.next(this.configurations.slice());
  }
}
