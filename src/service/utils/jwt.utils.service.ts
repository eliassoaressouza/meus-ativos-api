import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class JwtUtilsService {
    /**
    constructor(private readonly jwtService: JwtService) {}

    decode(auth: string): {id: string}{
        const jwt = auth.replace('Bearer ', '');
        return this.jwtService.decode(jwt, { json: true }) as { id: string };
    }
     */

}
