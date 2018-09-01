const defaultTripTime = Date.now() + (1000 * 60 * 10 ) // number of milliseconds available for packing

export default () => {

    const millisecondsToFinish = defaultTripTime - Date.now();

    const minutes = Math.floor(millisecondsToFinish  / 60000 );

    const seconds = Math.floor((millisecondsToFinish % 60000) / 1000)

    return (`In ${minutes} minute(s) and ${seconds} second(s)`);
}

/* Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

1 hour = 1 * 60 * 60 * 1000 milliseconds i.e  36,00,000

1 minute = 1 * 60 * 1000 milliseconds i.e. 60,000 ms

1 second = 1 * 1000 ms i.e. 1000 seconds

So, after the total milliseconds is divided by 60,000 the module will give me the number of milliseconds left that no more can be divided by 60,000 i.e. its less than a minute, meaning just divide by 1000 to get the no of seconds

**************************************************

>>> Just and extra irrelevant point -

To the make both the minute and seconds calculation line looking similar, I could write as below

export default () => {
  const millisecondsToFinish = defaultTripTime - Date.now();

  const minutes = Math.floor((millisecondsToFinish % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((millisecondsToFinish % (1000 * 60)) / 1000);

  return `in ${minutes} minute(s) and ${seconds} second(s)`;
};

For line < const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); >

I am dividing the millisecondsToFinish time into number of milliseconds in an hour ( 1 * 60 * 60 * 1000) and getting the residual value.

Meaning the module will give me only the milliseconds left after I get all the hours from the milliseconds.

So if the millisecondsToFinish itself is less than an hour then this extra module calculation will have no effect, because and the code effectively will just be

< const minutes = Math.floor(millisecondsToFinish  / 60000 ); >

e.g.

console.log(5 % 6) // => 5

*/