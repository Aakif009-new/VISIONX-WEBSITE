import type { CreateWorkshopInput, UpdateWorkshopInput } from "../validations";
export declare class WorkshopService {
    getAll(): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
    }>;
    create(data: CreateWorkshopInput): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
    }>;
    update(id: string, data: UpdateWorkshopInput): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
    }>;
}
export declare const workshopService: WorkshopService;
//# sourceMappingURL=workshop.service.d.ts.map