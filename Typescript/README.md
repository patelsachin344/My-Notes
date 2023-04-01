### Q. What is dublicate identifier issues

A. This is happening because when we create a folder and create a js file that time it takes file of whole folder as a script so that time id all files will have some same variable or function so thats why it gives a identifier issue .

just write this spnipit in top of ts file

```
export {}
```

It will generate a js file with stric mode so it will not give a identifier issue

### Q. what is watch ?

A. if we use --watch then type script automatically converts the ts to js .

### Q. let conversion

A. its mean when ts convert ts to js then let and var autumatically convert let or const to var.
Beacuse some browsers do not support let or const.
