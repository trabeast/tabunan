'use client';

import React, { Fragment, ReactNode, useMemo } from 'react';
import CalendarPicker from '@/components/ui/calendar-picker';
import { format } from 'date-fns';
import { z } from 'zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { useReservationContext } from '@/hooks/contexts/reservation/reservation-context';

const formSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  reservationFrom: z.date(),
  reservationTo: z.date(),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export default function BookForm({ children }: { children: ReactNode }) {
  const { reservation } = useReservationContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      reservationTo: undefined,
      reservationFrom: undefined,
    },
  });

  reservation?.from && form.setValue('reservationFrom', reservation?.from);
  reservation?.to && form.setValue('reservationTo', reservation?.to);

  const fields = useMemo(() => createFields(form), [form]);

  return (
    <div className={'mx-5'}>
      {children}
      <Form {...form}>
        <form className={'mt-5'} onSubmit={form.handleSubmit(onSubmit)}>
          <div className={'grid grid-cols-2 gap-10'}>
            <CalendarPicker>
              <Input
                className={'mt-5 disabled:opacity-100 disabled:cursor-default'}
                placeholder={'Select Dates'}
                disabled={true}
                value={reservationDisplay(reservation)}
              />
            </CalendarPicker>
            <div>{fields}</div>
          </div>
          <Button className={'float-right'} type={'submit'}>
            Book
          </Button>
        </form>
      </Form>
    </div>
  );
}

type BookFormItemProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
  className?: string;
  placeholder?: string;
  label: string;
};

export function BookFormItem({
  form,
  name,
  className,
  placeholder,
  label,
}: BookFormItemProps) {
  return name !== 'reservationFrom' && name !== 'reservationTo' ? (
    <FormField
      render={({ field }) => (
        <div className={className}>
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        </div>
      )}
      name={name}
      control={form.control}
    />
  ) : (
    ''
  );
}

function setBookFormItemProps(name: keyof z.infer<typeof formSchema>): Pick<
  BookFormItemProps,
  'placeholder' | 'label'
> & {
  name: keyof z.infer<typeof formSchema>;
} {
  switch (name) {
    case 'lastName':
      return {
        name,
        placeholder: 'Enter Last Name',
        label: 'Last Name',
      };
    case 'firstName':
      return {
        name,
        placeholder: 'Enter First Name',
        label: 'First Name',
      };
    default:
      return {
        name,
        placeholder: name,
        label: name,
      };
  }
}

function createFields(form: UseFormReturn<z.infer<typeof formSchema>>) {
  return Object.keys(form.getValues())
    .filter((key) => key !== 'reservationFrom' && key !== 'reservationTo')
    .map((key) =>
      setBookFormItemProps(key as unknown as keyof z.infer<typeof formSchema>),
    )
    .map((props, idx: number) => (
      <Fragment key={props.name}>
        <BookFormItem
          className={idx > 0 ? 'mt-5' : ''}
          form={form}
          {...props}
        />
      </Fragment>
    ));
}

function reservationDisplay(reservation: DateRange | undefined): string {
  if (reservation) {
    return (
      displayDate(reservation?.from) +
      (reservation?.to ? ' - ' : '') +
      displayDate(reservation?.to)
    );
  }

  return '';
}

function displayDate(date: Date | undefined): string {
  return `${date ? format(date, 'y/MM/dd') : ''}`;
}
