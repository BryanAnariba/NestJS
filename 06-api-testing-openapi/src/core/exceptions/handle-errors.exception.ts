import { HttpException, HttpStatus } from '@nestjs/common';

export const handleErrorException = (error: any): HttpException => {
  if (error instanceof HttpException) throw error;
  if (error.code === 'E11000')
    throw new HttpException('Duplicated record', HttpStatus.BAD_REQUEST);
  throw new HttpException(
    `Sometime went wrong: ${error}`,
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
};
