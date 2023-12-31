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

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Event 1',
        description: 'Description 1',
        date: new Date(),
      },
      {
        id: 2,
        title: 'Event 2',
        description: 'Description 2',
        date: new Date(),
      },
    ];
  }
  @Get('/:id')
  findOne(@Param('id') id) {
    return {
      id: id,
      title: `Event ${id}`,
      description: `Description ${id}`,
      date: new Date(),
    };
  }
  @Post()
  create(@Body() input) {
    return input;
  }
  @Patch('/:id')
  update(@Param('id') id, @Body() input) {
    return input;
  }
  @Delete('/:id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}
