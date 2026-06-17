import type { CreateWorkshopInput, UpdateWorkshopInput } from "../validations";
export declare class WorkshopService {
    getAll(): Promise<{
        id: string;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    create(data: CreateWorkshopInput): Promise<{
        id: string;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, data: UpdateWorkshopInput): Promise<{
        id: string;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        banner_image: string | null;
        venue: string;
        event_date: string;
        event_time: string;
        registration_open: boolean;
        max_seats: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
}
export declare const workshopService: WorkshopService;
//# sourceMappingURL=workshop.service.d.ts.map