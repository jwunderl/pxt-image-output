imageemitter.saveImage(img`1 2 3 4 5 6 7 F E D C`, "test 1");

imageemitter.saveSpriteSheet([
    image.ofBuffer(hex`e4101000000000000000000000000000000000000000000000000000000000ffff0000000000ff5555ff000000005f5555f5000000f0555555550f0000f0554444550f0000f0554444550f0000f0555555550f0000005f5555f500000000ff5555ff0000000000ffff000000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e410100000000000000000000000000000000000000000ffff0000000000ff55550f000000f05ffffff50f0000f0f555555f0f0000f05f5555f50f0000f0555555550f0000f0554444550f0000f0554554550f0000005f5555f500000000f05ff50f0000000000f00f000000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e41010000000000000000000000000000000000000000000000000000000f0ffff0f00000000ff5555ff000000f05ffffff50f0000f0f555555f0f0000f05f5555f50f0000f0554554550f0000f05f5555f50f000000ff5ff5ff0000000000ffff0000000000000000000000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e4101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000f05f5555f50f0000f0ffffffff0f0000f05f5555f50f0000f0ff5555ff0f000000f0ffff0f000000000000000000000000000000000000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e4101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0ffff0f000000f0ff5555ff0f0000f05f5555f50f0000f0ffffffff0f0000f05f5555f50f000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e41010000000000000000000000000000000000000000000000000000000000000000000000000ffff0000000000ff5ff5ff000000f05f5555f50f0000f0554554550f0000f05f5555f50f0000f0f555555f0f0000f05ffffff50f000000ff5555ff00000000f0ffff0f0000000000000000000000000000000000000000000000000000`),
    image.ofBuffer(hex`e4101000000000000000000000000000000000000000000000000000000000f00f0000000000f05ff50f000000005f5555f5000000f0554554550f0000f0554444550f0000f0555555550f0000f05f5555f50f0000f0f555555f0f0000f05ffffff50f000000ff55550f0000000000ffff00000000000000000000000000000000000000`)
], "coins")