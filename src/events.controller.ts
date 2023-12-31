import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {}
  @Get('/:id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} event`;
  }
  @Post()
  create(@Body() input) {
    return input;
  }
  @Patch('/:id')
  update(@Param('id') id, @Body() input) {}
  @Delete('/:id')
  remove(@Param('id') id) {}
}
