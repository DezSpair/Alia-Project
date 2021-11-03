export interface RaceFeat {
  name: string; // название черты
  value: number; // ее "полезность", крутость, бонусость
  deviation: number; // степень отклонения от нормы
}

export interface HybridInfo {
  featsCount: number;
  total: number;
  deviation: number;
  // raw: RaceFeat[];
}

export interface hybridOption {
  race: RaceFeat[];
  percentage: number;
}
