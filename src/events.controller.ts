import { Repository } from 'typeorm';

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
import { InjectRepository } from '@nestjs/typeorm';

import { CreateEventDto } from './create-event.dto';
import { Event } from './event.entity';
import { UpdateEventDto } from './update-event.dto';

@Controller('/events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get('/practice')
  async practice() {
    await this.repository.find({
      where: { id: 3 },
    });
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return await this.repository.findOne({ id: id });
  }
  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }
  @Patch('/:id')
  async update(@Param('id') id: number, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne({ where: { id } });
    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when,
    });
  }
  @Delete('/:id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const event = await this.repository.findOne({ where: { id } });
    await this.repository.remove(event);
    // this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
