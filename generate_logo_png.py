import math
from PIL import Image, ImageDraw, ImageFont

def draw_logo(bg_color=(15, 23, 42, 0), is_dark_bg=True):
    # High resolution 800x200 image for crisp rendering
    width, height = 800, 200
    img = Image.new("RGBA", (width, height), bg_color)
    draw = ImageDraw.Draw(img)

    # Colors
    if is_dark_bg:
        hexagon_color = (0, 240, 255) # Cyan
        glow_color = (59, 130, 246)   # Cobalt
        head_stroke = (255, 255, 255) # White
        text_primary = (255, 255, 255)
        text_cyan = (0, 240, 255)
    else:
        hexagon_color = (15, 23, 42)
        glow_color = (37, 99, 235)
        head_stroke = (15, 23, 42)
        text_primary = (15, 23, 42)
        text_cyan = (15, 23, 42)

    # 1. Hexagon Center & Vertices
    cx, cy, radius = 90, 100, 75
    # Hexagon pointy top
    hex_points = []
    for i in range(6):
        angle_deg = 60 * i - 90 # Pointy top at -90 deg
        angle_rad = math.radians(angle_deg)
        x = cx + radius * math.cos(angle_rad)
        y = cy + radius * math.sin(angle_rad)
        hex_points.append((x, y))

    # Draw Hexagon Frame (thick stroke)
    draw.polygon(hex_points, outline=hexagon_color, width=10)

    # 2. Head Silhouette inside Hexagon (Facing Right)
    # Scaled and centered points around (cx, cy)
    head_points = [
        (cx + 8, cy - 45), (cx + 25, cy - 45), (cx + 38, cy - 32),
        (cx + 38, cy - 15), (cx + 32, cy - 5), (cx + 38, cy + 2),
        (cx + 30, cy + 12), (cx + 24, cy + 20), (cx + 24, cy + 35),
        (cx + 10, cy + 35), (cx + 10, cy + 22), (cx + 6, cy + 15),
        (cx, cy + 8), (cx - 10, cy + 8), (cx - 15, cy - 5),
        (cx - 15, cy - 25), (cx - 5, cy - 45), (cx + 8, cy - 45)
    ]
    draw.line(head_points, fill=head_stroke, width=7, joint="curve")

    # 3. Circuit Traces & Nodes
    # Trace 1 Top
    t1 = [(cx - 10, cy - 25), (cx - 45, cy - 25), (cx - 52, cy - 15)]
    draw.line(t1, fill=hexagon_color, width=6, joint="curve")
    draw.ellipse([cx - 58, cy - 21, cx - 46, cy - 9], fill=hexagon_color)

    # Trace 2 Middle
    t2 = [(cx - 12, cy - 5), (cx - 48, cy - 5), (cx - 38, cy + 8)]
    draw.line(t2, fill=hexagon_color, width=6, joint="curve")
    draw.ellipse([cx - 44, cy + 2, cx - 32, cy + 14], fill=hexagon_color)

    # Trace 3 Bottom
    t3 = [(cx - 8, cy + 18), (cx - 32, cy + 18), (cx - 25, cy + 28)]
    draw.line(t3, fill=hexagon_color, width=6, joint="curve")
    draw.ellipse([cx - 31, cy + 22, cx - 19, cy + 34], fill=hexagon_color)

    # 4. Text "AI AUTOMATION LABS"
    try:
        font_ai = ImageFont.truetype("arialbd.ttf", 46)
        font_auto = ImageFont.truetype("arialbd.ttf", 38)
        font_labs = ImageFont.truetype("arialbd.ttf", 38)
    except:
        font_ai = font_auto = font_labs = ImageFont.load_default()

    text_x = 210
    draw.text((text_x, 30), "AI", font=font_ai, fill=text_primary)
    draw.text((text_x, 82), "AUTOMATION", font=font_auto, fill=text_cyan)
    draw.text((text_x, 128), "LABS", font=font_labs, fill=text_primary)

    return img

# Save images
img_dark = draw_logo(is_dark_bg=True)
img_dark.save("assets/logo.png")

img_light = draw_logo(is_dark_bg=False)
img_light.save("assets/logo_dark_text.png")

print("Generated assets/logo.png and assets/logo_dark_text.png successfully")
