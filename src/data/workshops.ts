export interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription: string;
  banner?: string;
  capacity: number;
  registeredCount: number;
  isRegistrationOpen: boolean;
  category: string;
  googleFormUrl?: string;
  price?: string;
}

export interface Registration {
  id: string;
  workshopId: string;
  fullName: string;
  email: string;
  mobile: string;
  college: string;
  department: string;
  year: string;
  workshopName: string;
  notes?: string;
  registeredAt: string;
}


