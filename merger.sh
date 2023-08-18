echo --- > ./docs/pdf/index.md
echo sidebar_class_name: hidden >> ./docs/pdf/index.md
echo --- >> ./docs/pdf/index.md

# create sorted master file
for dir in ./docs/* 
do 
cat $dir/index.md | tail -n +8 >> ./docs/pdf/index.md
files="$(find $dir -name "*.md" | sort | grep -v index)"
if (test -n "$files") then
cat $files >> ./docs/pdf/index.md
fi
done









# # create toc
# grep '#' ./docs/pdf/index.md > ./docs/pdf/toc.md
# cat ./docs/pdf/toc.md >> ./docs/pdf/index.md
















# MYREGEX = '(<h2)[^]*?(<\/h2>)'
# echo "$(./build/docs/pdf/index.html)" 
# grep '(<h2)[^]*?(<\/h2>)' ./build/docs/pdf/index.html > test.txt
# sed -n "/<h2/,/<\/h2>/p" ./build/docs/pdf/index.html