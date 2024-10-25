
rm -rvf docs/*
ng build --base-href=/docs
mv docs/browser/* docs/ -v
rmdir docs/browser