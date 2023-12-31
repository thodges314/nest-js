import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'Event 1',
        description: 'Description 1',
        when: new Date(),
        address: 'Address 1',
      },
      {
        id: 2,
        name: 'Event 2',
        description: 'Description 2',
        when: new Date(),
        address: 'Address 2',
      },
    ];
  }
  @Get('/:id')
  findOne(@Param('id') id: number) {
    return {
      id: id,
      name: `Event ${id}`,
      description: `Description ${id}`,
      when: new Date(),
      address: `Address ${id}`,
    };
  }
  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }
  @Patch('/:id')
  update(@Param('id') id: number, @Body() input: UpdateEventDto) {
    return input;
  }
  @Delete('/:id')
  @HttpCode(204)
  remove(@Param('id') id: number) {}
}
